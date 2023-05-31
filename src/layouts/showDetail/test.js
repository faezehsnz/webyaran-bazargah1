import React, { useRef, useEffect } from 'react';

function ScatterChart({ data, width, height , quadrantSize = 50}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // clear canvas
    ctx.clearRect(0, 0, width, height);
// draw checkboard pattern
for (let i = 0; i < height; i += quadrantSize) {
    for (let j = 0; j < width; j += quadrantSize) {
      if (i < height / 2 && j < width / 2) {
        // top-left quadrant
        ctx.fillStyle = 'red';
      } else if (i < height / 2 && j >= width / 2) {
        // top-right quadrant
        ctx.fillStyle = 'blue';
      } else if (i >= height / 2 && j < width / 2) {
        // bottom-left quadrant
        ctx.fillStyle = 'green';
      } else {
        // bottom-right quadrant
        ctx.fillStyle = 'yellow';
      }
      ctx.fillRect(j, i, quadrantSize, quadrantSize);
    }
  }
    // set axis labels
    ctx.font = '12px Arial';
    ctx.fillText('X Axis', width / 2 - 20, height - 5);
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Y Axis', 0, 0);
    ctx.restore();

    // draw grid lines
    const numGridLines = 10;
    const xIncrement = width / numGridLines;
    const yIncrement = height / numGridLines;

    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

    for (let i = 1; i < numGridLines; i++) {
      // horizontal lines
      ctx.beginPath();
      ctx.moveTo(0, i * yIncrement);
      ctx.lineTo(width, i * yIncrement);
      ctx.stroke();

      // vertical lines
      ctx.beginPath();
      ctx.moveTo(i * xIncrement, 0);
      ctx.lineTo(i * xIncrement, height);
      ctx.stroke();
    }

    // draw X and Y axis lines
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;

      // X axis line
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Y axis line
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // draw data points
      data.forEach((point) => {
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
        ctx.fill();
      });
    }, [data, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: '1px solid black' }}
    />
  );
}

export default ScatterChart;