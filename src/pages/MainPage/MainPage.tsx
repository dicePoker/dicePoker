import React, { PureComponent, ReactElement } from 'react';
import { Main } from '../../components/Main/Main';
import { DrawController } from '../../controllers/DrawController';
import { GameController } from '../../controllers/GameController';
import { Modal } from '@/components/Modal/Modal';
import { Pause } from '@/components/Pause/Pause';
import { withRouter } from 'react-router-dom';

type State = {
  isShowModal: boolean;
};

type History = {
  push: (path: string) => void;
};

class MainPage extends PureComponent {
  public state: State;
  constructor(props: { history: History }) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }
  private drawController: DrawController | undefined;
  // @ts-ignore
  private gameController = new GameController(this.props.history);

  private showModal(): void {
    this.setState(() => {
      return { isShowModal: true };
    });
  }
  private closeModal(): void {
    this.setState(() => {
      return { isShowModal: false };
    });
  }
  private blurHandler(): void {
    this.showModal();
  }

  render(): ReactElement {
    return (
      <div className="main-page">
        <Main gameController={this.gameController} />
        <Modal isShow={this.state.isShowModal} closeHandle={this.closeModal}>
          <Pause clickHandler={() => this.closeModal()} />
        </Modal>
      </div>
    );
  }

  componentDidMount(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.drawController = new DrawController(canvas);
    this.gameController.setDrawController(this.drawController);
    this.gameController.init();

    window.addEventListener('blur', () => {
      this.blurHandler();
    });
  }

  componentWillUnmount(): void {
    window.removeEventListener('blur', this.blurHandler.bind(this));
  }
}

// @ts-ignore
export default withRouter(MainPage);
