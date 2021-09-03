import { DrawController } from './DrawController';
import { getRandomCube } from '../utils/getRandomCube';

const TOTAL_CUBES = 5;

export class GameController {
  private drawController: DrawController | undefined;
  private selectedValues: number[];
  private currentVals: number[];

  constructor() {
    this.selectedValues = [];
    this.currentVals = [];
    this.canvasClickHandler = this.canvasClickHandler.bind(this);
    this.makeThrow = this.makeThrow.bind(this);
  }

  setDrawController(drawController: DrawController) {
    this.drawController = drawController;
  }

  init() {
    for (let i = 0; i < TOTAL_CUBES; i++) {
      this.currentVals.push(getRandomCube());
    }
    this.drawController.drawTopRow(this.currentVals);
    this.drawController.setCanvasClickListener(this.canvasClickHandler);
  }

  makeThrow() {
    console.log(this);
    const vals = [];
    for (let i = 0; i < TOTAL_CUBES - this.selectedValues.length; i++) {
      vals.push(getRandomCube());
    }
    this.currentVals = vals;
    this.drawController.drawTopRow(vals);
  }

  canvasClickHandler(event: Event) {
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
