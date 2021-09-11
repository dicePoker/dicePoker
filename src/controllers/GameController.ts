import { DrawController } from './DrawController';
import { getRandomCube } from '../utils/getRandomCube';
import { cloneDeep } from 'lodash';

const TOTAL_CUBES = 5;

const FIRST_PHASE_COMBINATIONS = [
  {
    id: 'ones',
    label: 'Единицы',
    value: -1,
  },
  {
    id: 'deuces',
    label: 'Двойки',
    value: -1,
  },
  {
    id: 'triplets',
    label: 'Тройки',
    value: -1,
  },
  {
    id: 'fours',
    label: 'Четверки',
    value: -1,
  },
  {
    id: 'fives',
    label: 'Пятерки',
    value: -1,
  },
  {
    id: 'sixes',
    label: 'Шестерки',
    value: -1,
  },
];

const SECOND_PHASE_COMBINATIONS = [
  {
    id: 'pair',
    label: 'Пара',
    value: -1,
  },
  {
    id: 'pairs',
    label: 'Две пары',
    value: -1,
  },
  {
    id: 'sim3',
    label: '3 одинаковых',
    value: -1,
  },
  {
    id: 'sim4',
    label: '4 одинаковых',
    value: -1,
  },
  {
    id: 'poker',
    label: 'Покер',
    value: -1,
  },
  {
    id: 'fullHouse',
    label: '3+2',
    value: -1,
  },
  {
    id: 'sum',
    label: 'Сумма',
    value: -1,
  },
  {
    id: 'smallStraight',
    label: 'Малый стрит',
    value: -1,
  },
  {
    id: 'bigStraight',
    label: 'Большой стрит',
    value: -1,
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
    this.numberOfThrows = 2;
    this.switchPlayer();
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

  updateResult(evt: React.MouseEvent) {
    console.log(evt.target.dataset.comb);
    const cubeValues: number[] = [];
    this.selectedValues.forEach(item => cubeValues.push(item));
    this.currentVals.forEach(item => cubeValues.push(item));
    console.log(cubeValues);
    const sum = cubeValues.reduce((a, b) => a + b);
    console.log(sum);
    if (this.phase === 1) {
      const selectedComb = this.gameResults[
        this.currentPlayer
      ].firstPhasePoints.find(item => item.id === evt.target.dataset.comb);
      if (selectedComb && selectedComb.value === -1) {
        selectedComb.value = sum;
      }
      console.log(this.gameResults);
    } else {
      const selectedComb = this.gameResults[
        this.currentPlayer
      ].secondPhasePoints.find(item => item.id === evt.target.dataset.comb);
      if (selectedComb && selectedComb.value === -1) {
        selectedComb.value = sum;
      }
      console.log(this.gameResults);
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
}
