import React, { PureComponent, ReactElement } from 'react';
import { Main } from '../../components/Main/Main';
import { DrawController } from '../../controllers/DrawController';
import { GameController } from '../../controllers/GameController';

export class MainPage extends PureComponent {
  private drawController: DrawController | undefined;
  private gameController: GameController | undefined;

  render(): ReactElement {
    return (
      <div className="main-page">
        <Main />
      </div>
    );
  }

  componentDidMount(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.drawController = new DrawController(canvas);
    this.gameController = new GameController(this.drawController);
    //this.drawController.drawTopRow([1, 3, 4]);
    //this.drawController.drawBottomRow([2, 5, 6]);
    this.gameController.init();
  }
}
