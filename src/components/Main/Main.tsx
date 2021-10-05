import React, { useState } from 'react';
import './Main.scss';
import { useStyles } from '../../utils/makeStyles';
import { Button, Grid } from '@material-ui/core';
import { Modal } from '../Modal/Modal';
import { Table } from '../Table/Table';
import { GameController } from '../../controllers/GameController';
import { useDispatch } from 'react-redux';

export type MainProps = {
  gameController: GameController;
};

export const Main = (props: MainProps): JSX.Element => {
  const classes = useStyles();
  const [isShowModal, setShowModal] = useState(false);

  const showModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const dispatch = useDispatch();

  props.gameController.setCloseModal(closeModal);
  props.gameController.setDispatch(dispatch);

  return (
    <section className="main">
      <p>Сейчас ходит {props.gameController.getCurrentPlayerName()}</p>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <canvas id="canvas" className="main__canvas" />
        <ul className="main__btn-list">
          <li className="main__btn-item">
            <Button
              variant="contained"
              size="medium"
              disabled={props.gameController.numberOfThrows === 0}
              className={classes.buttonMain}
              onClick={props.gameController.makeThrow}
            >
              Перебросить
            </Button>
          </li>
          <li className="main__btn-item">
            <Button
              variant="contained"
              size="medium"
              className={classes.buttonMain}
              onClick={showModal}
            >
              Завершить
            </Button>
          </li>
          <li className="main__btn-item">
            <Button
              variant="contained"
              size="medium"
              className={classes.buttonMain}
              onClick={showModal}
            >
              Таблица
            </Button>
          </li>
        </ul>
      </Grid>
      <Modal isShow={isShowModal} closeHandle={closeModal}>
        <Table gameController={props.gameController} />
      </Modal>
    </section>
  );
};
