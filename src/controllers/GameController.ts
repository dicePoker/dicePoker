import { DrawController } from './DrawController';
import { getRandomCube } from '../utils/getRandomCube';

const TOTAL_CUBES = 5;

export class GameController {
  private drawController: DrawController;
  private selectedValues: number[];
  private currentVals: number[];

  constructor(drawController: DrawController) {
    this.drawController = drawController;
    this.selectedValues = [];
    this.currentVals = [];
    this.canvasClickHandler = this.canvasClickHandler.bind(this);
  }

  init() {
    for (let i = 0; i < TOTAL_CUBES; i++) {
      this.currentVals.push(getRandomCube());
    }
    this.drawController.drawTopRow(this.currentVals);
    this.drawController.setCanvasClickListener(this.canvasClickHandler);
  }

  makeThrow() {
    const vals = [];
    for (let i = 0; i < TOTAL_CUBES - this.selectedValues.length; i++) {
      vals.push(getRandomCube());
    }
    this.drawController.drawTopRow(vals);
  }

  canvasClickHandler(event: Event) {
    const x = event.offsetX;
    const y = event.offsetY; // координаты клика по канвасу
    console.log('x: ' + x + ' y: ' + y);
    console.log(
      this.drawController.getClickedTopRowCubeIndex(
        x,
        y,
        this.currentVals.length,
      ),
    );
  }
}
