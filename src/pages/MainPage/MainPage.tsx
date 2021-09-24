import React, { PureComponent, ReactElement } from 'react';
import { Main } from '../../components/Main/Main';
import { DrawController } from '../../controllers/DrawController';
import { GameController } from '../../controllers/GameController';

export class MainPage extends PureComponent {
  private drawController: DrawController | undefined;
  private gameController = new GameController();

  render(): ReactElement {
    return (
      <div className="main-page">
        <Main gameController={this.gameController} />
      </div>
    );
  }

  componentDidMount(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.drawController = new DrawController(canvas);
    this.gameController.setDrawController(this.drawController);
    this.gameController.init();
  }
}
