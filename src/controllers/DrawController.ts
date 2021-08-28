const CUBE_SIZE = 40;
const CUBE_BORDER_RADIUS = 4;
const CIRCLE_RADIUS = 4;
const CIRCLE_GAP = 4; // отступ краев круга от краев кубика
const CUBE_GAP = 20;
const MARGIN = 10;

export class DrawController {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private readonly pixelRatio: number;
  // TODO: пофиксить разрешение https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da

  constructor(canvas: HTMLCanvasElement) {
    //this.pixelRatio = window.devicePixelRatio || 1;
    this.pixelRatio = 1;
    this.canvas = canvas;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = '#40D360';
    this.canvas.width = this.canvas.width * this.pixelRatio;
    this.canvas.height = this.canvas.height * this.pixelRatio;
    this.ctx.fillStyle = '#40D360';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.setCanvasClickListener = this.setCanvasClickListener.bind(this);
  }

  drawCube(topLeftX: number, topLeftY: number, val: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(topLeftX + CUBE_BORDER_RADIUS, topLeftY);
    this.ctx.lineTo(topLeftX + CUBE_SIZE - CUBE_BORDER_RADIUS, topLeftY);
    this.ctx.quadraticCurveTo(
      topLeftX + CUBE_SIZE,
      topLeftY,
      topLeftX + CUBE_SIZE,
      topLeftY + CUBE_BORDER_RADIUS,
    );
    this.ctx.lineTo(
      topLeftX + CUBE_SIZE,
      topLeftY + CUBE_SIZE - CUBE_BORDER_RADIUS,
    );
    this.ctx.quadraticCurveTo(
      topLeftX + CUBE_SIZE,
      topLeftY + CUBE_SIZE,
      topLeftX + CUBE_SIZE - CUBE_BORDER_RADIUS,
      topLeftY + CUBE_SIZE,
    );
    this.ctx.lineTo(topLeftX + CUBE_BORDER_RADIUS, topLeftY + CUBE_SIZE);
    this.ctx.quadraticCurveTo(
      topLeftX,
      topLeftY + CUBE_SIZE,
      topLeftX,
      topLeftY + CUBE_SIZE - CUBE_BORDER_RADIUS,
    );
    this.ctx.lineTo(topLeftX, topLeftY + CUBE_BORDER_RADIUS);
    this.ctx.quadraticCurveTo(
      topLeftX,
      topLeftY,
      topLeftX + CUBE_BORDER_RADIUS,
      topLeftY,
    );
    this.ctx.closePath();
    this.ctx.fillStyle = 'rgba(255, 255, 255)';
    this.ctx.fill();

    // рисуем точки
    switch (val) {
      case 1:
        this.drawMiddle(topLeftX, topLeftY);
        break;
      case 2:
        this.drawTopLeft(topLeftX, topLeftY);
        this.drawBottomRight(topLeftX, topLeftY);
        break;
      case 3:
        this.drawMiddle(topLeftX, topLeftY);
        this.drawTopLeft(topLeftX, topLeftY);
        this.drawBottomRight(topLeftX, topLeftY);
        break;
      case 4:
        this.drawTopLeft(topLeftX, topLeftY);
        this.drawBottomRight(topLeftX, topLeftY);
        this.drawTopRight(topLeftX, topLeftY);
        this.drawBottomLeft(topLeftX, topLeftY);
        break;
      case 5:
        this.drawMiddle(topLeftX, topLeftY);
        this.drawTopLeft(topLeftX, topLeftY);
        this.drawBottomRight(topLeftX, topLeftY);
        this.drawTopRight(topLeftX, topLeftY);
        this.drawBottomLeft(topLeftX, topLeftY);
        break;
      case 6:
        this.drawTopLeft(topLeftX, topLeftY);
        this.drawBottomRight(topLeftX, topLeftY);
        this.drawTopRight(topLeftX, topLeftY);
        this.drawBottomLeft(topLeftX, topLeftY);
        this.drawMiddleRight(topLeftX, topLeftY);
        this.drawMiddleLeft(topLeftX, topLeftY);
        break;
    }
  }

  drawCircle(centerX: number, centerY: number): void {
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'rgba(0, 0, 0)';
    this.ctx.fill();
  }

  // методы рисования точек
  drawTopLeft(topLeftX: number, topLeftY: number): void {
    this.drawCircle(
      topLeftX + CIRCLE_GAP + CIRCLE_RADIUS,
      topLeftY + CIRCLE_GAP + CIRCLE_RADIUS,
    );
  }

  drawTopRight(topLeftX: number, topLeftY: number): void {
    this.drawCircle(
      topLeftX + CUBE_SIZE - CIRCLE_GAP - CIRCLE_RADIUS,
      topLeftY + CIRCLE_GAP + CIRCLE_RADIUS,
    );
  }

  drawMiddleLeft(topLeftX: number, topLeftY: number): void {
    this.drawCircle(
      topLeftX + CIRCLE_GAP + CIRCLE_RADIUS,
      topLeftY + CUBE_SIZE / 2,
    );
  }

  drawMiddle(topLeftX: number, topLeftY: number): void {
    this.drawCircle(topLeftX + CUBE_SIZE / 2, topLeftY + CUBE_SIZE / 2);
  }

  drawMiddleRight(topLeftX: number, topLeftY: number): void {
    this.drawCircle(
      topLeftX + CUBE_SIZE - CIRCLE_GAP - CIRCLE_RADIUS,
      topLeftY + CUBE_SIZE / 2,
    );
  }

  drawBottomLeft(topLeftX: number, topLeftY: number): void {
    this.drawCircle(
      topLeftX + CIRCLE_GAP + CIRCLE_RADIUS,
      topLeftY + CUBE_SIZE - CIRCLE_GAP - CIRCLE_RADIUS,
    );
  }

  drawBottomRight(topLeftX: number, topLeftY: number): void {
    this.drawCircle(
      topLeftX + CUBE_SIZE - CIRCLE_GAP - CIRCLE_RADIUS,
      topLeftY + CUBE_SIZE - CIRCLE_GAP - CIRCLE_RADIUS,
    );
  }

  // рисуем верхний ряд
  drawTopRow(values: number[]) {
    values.forEach((item, index) => {
      this.drawCube(
        MARGIN + index * CUBE_GAP + index * CUBE_SIZE,
        MARGIN,
        item,
      );
    });
  }

  // рисуем верхний ряд
  drawBottomRow(values: number[]) {
    values.forEach((item, index) => {
      this.drawCube(
        MARGIN + index * CUBE_GAP + index * CUBE_SIZE,
        MARGIN + 2 * CUBE_SIZE,
        item,
      );
    });
  }

  setCanvasClickListener(callback: any) {
    this.canvas.addEventListener('click', callback);
  }

  getClickedTopRowCubeIndex(x: number, y: number, topRowQuantity: number) {
    if (y < MARGIN || y > MARGIN + CUBE_SIZE) {
      // кликнули не по кубику по высоте
      return -1;
    }
    return 0;
  }
}