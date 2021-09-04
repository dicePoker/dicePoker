import { DrawController } from './DrawController';
import { getRandomCube } from '../utils/getRandomCube';

const TOTAL_CUBES = 5;

export class GameController {
  private drawController: DrawController | undefined;
  private selectedValues: number[];
  private currentVals: number[];
  public finishedVals: number[];
  numberOfThrows = 2;

  constructor() {
    this.selectedValues = [];
    this.currentVals = [];
    this.canvasClickHandler = this.canvasClickHandler.bind(this);
    this.makeThrow = this.makeThrow.bind(this);
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
    this.selectedValues.forEach(item => this.finishedVals.push(item));
    this.currentVals.forEach(item => this.finishedVals.push(item));
    this.selectedValues = [];
    this.currentVals = [];
    this.numberOfThrows = 2;
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
}
