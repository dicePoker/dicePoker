import React, { PureComponent, ReactElement } from 'react';
import { Main } from '../../components/Main/Main';
import { DrawController } from '../../utils/DrawController';

export class MainPage extends PureComponent {
  private drawController: DrawController | undefined;

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
    this.drawController.drawCube(10, 10, 5);
    this.drawController.drawCube(70, 10, 6);
  }
}
