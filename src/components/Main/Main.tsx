import React from 'react';
import './Main.scss';
import { useStyles } from '../../utils/makeStyles';
import { Button, Grid } from '@material-ui/core';
import { GameController } from '../../controllers/GameController';

export type MainProps = {
  gameController: GameController;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Main = (props: MainProps): JSX.Element => {
  const classes = useStyles();

  return (
    <section className="main">
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
              color="primary"
              className={classes.button}
              onClick={props.gameController.makeThrow}
            >
              Перебросить
            </Button>
          </li>
          <li className="main__btn-item">
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              className={classes.button}
            >
              Завершить
            </Button>
          </li>
          <li className="main__btn-item">
            <Button
              variant="contained"
              size="medium"
              className={classes.button}
            >
              Таблица
            </Button>
          </li>
        </ul>
      </Grid>
    </section>
  );
};
