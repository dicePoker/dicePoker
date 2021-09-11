import { DrawController } from './DrawController';
import { getRandomCube } from '../utils/getRandomCube';
import { cloneDeep } from 'lodash';

const TOTAL_CUBES = 5;

const FIRST_PHASE_COMBINATIONS = [
  {
    id: 'ones',
    label: 'Единицы',
    value: -200,
  },
  {
    id: 'deuces',
    label: 'Двойки',
    value: -200,
  },
  {
    id: 'triplets',
    label: 'Тройки',
    value: -200,
  },
  {
    id: 'fours',
    label: 'Четверки',
    value: -200,
  },
  {
    id: 'fives',
    label: 'Пятерки',
    value: -200,
  },
  {
    id: 'sixes',
    label: 'Шестерки',
    value: -200,
  },
];

const SECOND_PHASE_COMBINATIONS = [
  {
    id: 'pair',
    label: 'Пара',
    value: -200,
  },
  {
    id: 'pairs',
    label: 'Две пары',
    value: -200,
  },
  {
    id: 'sim3',
    label: '3 одинаковых',
    value: -200,
  },
  {
    id: 'sim4',
    label: '4 одинаковых',
    value: -200,
  },
  {
    id: 'poker',
    label: 'Покер',
    value: -200,
  },
  {
    id: 'fullHouse',
    label: '3+2',
    value: -200,
  },
  {
    id: 'sum',
    label: 'Сумма',
    value: -200,
  },
  {
    id: 'smallStraight',
    label: 'Малый стрит',
    value: -200,
  },
  {
    id: 'bigStraight',
    label: 'Большой стрит',
    value: -200,
  },
];

export type Combination = {
  id: string;
  label: string;
  value: number;
};

export interface PlayerResults {
  playerName: string;
  total: number;
  firstPhasePoints: Combination[];
  secondPhasePoints: Combination[];
}

export class GameController {
  private drawController: DrawController | undefined;
  private selectedValues: number[];
  private currentVals: number[];
  public finishedVals: number[] = [];

  public closeModalEmitter: any;
  public gameResults = [
    {
      playerName: 'Игрок 1',
      total: 0,
      firstPhasePoints: cloneDeep(FIRST_PHASE_COMBINATIONS),
      secondPhasePoints: cloneDeep(SECOND_PHASE_COMBINATIONS),
    },
    {
      playerName: 'Игрок 2',
      total: 0,
      firstPhasePoints: cloneDeep(FIRST_PHASE_COMBINATIONS),
      secondPhasePoints: cloneDeep(SECOND_PHASE_COMBINATIONS),
    },
  ];
  numberOfThrows = 2;
  public currentPlayer = 0;
  public phase = 1; // 1 или 2 - какая фаза игры идет

  constructor() {
    this.selectedValues = [];
    this.currentVals = [];
    this.canvasClickHandler = this.canvasClickHandler.bind(this);
    this.makeThrow = this.makeThrow.bind(this);
    this.updateResult = this.updateResult.bind(this);
  }

  setDrawController(drawController: DrawController): void {
    this.drawController = drawController;
  }

  init(): void {
    this.drawController.clearCanvas();
    for (let i = 0; i < TOTAL_CUBES; i++) {
      this.currentVals.push(getRandomCube());
    }
    this.drawController.drawTopRow(this.currentVals);
    this.drawController.setCanvasClickListener(this.canvasClickHandler);
    this.numberOfThrows = 2;
    this.finishedVals = [];
  }

  finishMove(): void {
    this.selectedValues = [];
    this.currentVals = [];
    this.numberOfThrows = 3;
    this.switchPlayer();
    this.drawController?.clearCanvas();
    this.makeThrow();
  }

  makeThrow(): void {
    if (this.numberOfThrows > 0) {
      const vals = [];
      for (let i = 0; i < TOTAL_CUBES - this.selectedValues.length; i++) {
        vals.push(getRandomCube());
      }
      this.currentVals = vals;
      this.drawController.drawTopRow(vals);
      this.numberOfThrows--;
      console.log(this.numberOfThrows);
    }
  }

  canvasClickHandler(event: Event): void {
    const x = event.offsetX;
    const y = event.offsetY; // координаты клика по канвасу
    console.log('x: ' + x + ' y: ' + y);
    const clicked = this.drawController.getClickedTopRowCubeIndex(
      x,
      y,
      this.currentVals.length,
    );
    if (clicked >= 0) {
      const clickedValue = this.currentVals[clicked];
      this.drawController.clearCanvas();
      this.currentVals = this.currentVals.filter(
        (item, index) => index !== clicked,
      );
      this.selectedValues.push(clickedValue);
      this.drawController.drawTopRow(this.currentVals);
      this.drawController.drawBottomRow(this.selectedValues);
      this.drawController.removeCanvasClickListener(this.canvasClickHandler);
      this.drawController.setCanvasClickListener(this.canvasClickHandler);
    }
  }
  calculateSum(vals: number[], comb: string): number {
    switch (comb) {
      case 'ones':
        return vals.filter(item => item === 1).length - 3;
      case 'deuces':
        return (vals.filter(item => item === 2).length - 3) * 2;
      case 'triplets':
        return (vals.filter(item => item === 3).length - 3) * 3;
      case 'fours':
        return (vals.filter(item => item === 4).length - 3) * 4;
      case 'fives':
        return (vals.filter(item => item === 5).length - 3) * 5;
      case 'sixes':
        return (vals.filter(item => item === 6).length - 3) * 6;
      case 'pair':
        {
          const sorted = vals.sort();
          for (let i = sorted.length - 1; i > 0; i--) {
            if (sorted[i] === sorted[i - 1]) {
              return sorted[i] * 2;
            }
          }
        }
        return 0;
      case 'pairs':
        {
          const sorted = vals.sort();
          let firstVal = 0;
          for (let i = sorted.length - 1; i > 0; i--) {
            if (sorted[i] === sorted[i - 1]) {
              if (!firstVal) {
                firstVal = sorted[i];
              } else {
                return sorted[i] * 2 + firstVal * 2;
              }
            }
          }
        }
        return 0;
      case 'sim3':
        {
          const sorted = vals.sort();
          for (let i = sorted.length - 1; i > 1; i--) {
            if (sorted[i] === sorted[i - 1] && sorted[i] === sorted[i - 2]) {
              return sorted[i] * 3;
            }
          }
        }
        return 0;
      case 'sim4':
        {
          const sorted = vals.sort();
          for (let i = sorted.length - 1; i > 2; i--) {
            if (
              sorted[i] === sorted[i - 1] &&
              sorted[i] === sorted[i - 2] &&
              sorted[i] === sorted[i - 3]
            ) {
              return sorted[i] * 4;
            }
          }
        }
        return 0;
      case 'poker':
        const val = vals[0];
        for (let i = vals.length - 1; i >= 0; i--) {
          if (vals[i] !== val) {
            return 0;
          }
        }
        return val * 5;
      case 'fullHouse':
        {
          const sorted = vals.sort();
          if (
            (sorted[0] === sorted[1] &&
              sorted[2] === sorted[3] &&
              sorted[2] === sorted[4]) ||
            (sorted[0] === sorted[1] &&
              sorted[0] === sorted[2] &&
              sorted[3] === sorted[4])
          )
            return vals.reduce((a, b) => a + b);
        }
        return 0;
      case 'smallStraight':
        {
          const sorted = vals.sort();
          for (let i = sorted.length - 1; i > 2; i--) {
            if (
              sorted[i] === sorted[i - 1] + 1 &&
              sorted[i] === sorted[i - 2] + 2 &&
              sorted[i] === sorted[i - 3] + 3
            ) {
              return sorted[i] + sorted[i - 1] + sorted[i - 2] + sorted[i - 3];
            }
          }
        }
        return 0;
      case 'bigStraight':
        {
          const sorted = vals.sort();
          if (
            (sorted[0] === 1 &&
              sorted[1] === 2 &&
              sorted[2] === 3 &&
              sorted[3] === 4 &&
              sorted[4] === 5) ||
            (sorted[0] === 2 &&
              sorted[1] === 3 &&
              sorted[2] === 4 &&
              sorted[3] === 5 &&
              sorted[4] === 6)
          )
            return vals.reduce((a, b) => a + b);
        }
        return 0;
      case 'sum':
        return vals.reduce((a, b) => a + b);
      default:
        return -200;
    }
  }

  updateResult(evt: React.MouseEvent) {
    console.log(evt.target.dataset.comb);
    const cubeValues: number[] = [];
    this.selectedValues.forEach(item => cubeValues.push(item));
    this.currentVals.forEach(item => cubeValues.push(item));
    console.log(cubeValues);
    if (this.phase === 1) {
      const selectedComb = this.gameResults[
        this.currentPlayer
      ].firstPhasePoints.find(item => item.id === evt.target.dataset.comb);
      if (selectedComb && selectedComb.value === -200) {
        selectedComb.value = this.calculateSum(
          cubeValues,
          evt.target.dataset.comb,
        );

        if (
          this.currentPlayer === this.gameResults.length - 1 &&
          this.gameResults[this.currentPlayer].firstPhasePoints.filter(
            item => item.value === -200,
          ).length === 0
        ) {
          this.updateSum();
          this.phase = 2;
        }
        this.finishMove();
        this.closeModalEmitter();
      }
    } else {
      const selectedComb = this.gameResults[
        this.currentPlayer
      ].secondPhasePoints.find(item => item.id === evt.target.dataset.comb);
      if (selectedComb && selectedComb.value === -200) {
        selectedComb.value = this.calculateSum(
          cubeValues,
          evt.target.dataset.comb,
        );
        this.finishMove();
        this.closeModalEmitter();
      }
    }
  }

  switchPlayer() {
    if (this.currentPlayer < this.gameResults.length - 1) {
      this.currentPlayer++;
    } else {
      this.currentPlayer = 0;
    }
  }

  getCurrentPlayerName() {
    return this.gameResults[this.currentPlayer].playerName;
  }

  updateSum() {
    this.gameResults.forEach(player => {
      if (this.phase === 1) {
        let sum = 0;
        player.firstPhasePoints.forEach(item => (sum += item.value));
        player.total = sum;
      } else {
        let sum = 0;
        player.secondPhasePoints.forEach(item => (sum += item.value));
        player.total += sum;
      }
    });
  }

  setCloseModal(callback) {
    this.closeModalEmitter = callback;
  }
}
