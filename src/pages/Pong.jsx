import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const Pong = () => {
  const canvasRef = useRef(null);

  const paddleWidth = 10;
  const paddleHeight = 75;
  const paddleSpeed = 5;
  let leftPaddleY = 0;
  let rightPaddleY = 0;

  const drawPaddles = (ctx, canvas) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    leftPaddleY = (canvas.height - paddleHeight) / 2;
    rightPaddleY = (canvas.height - paddleHeight) / 2;

    const render = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPaddles(ctx, canvas);
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <Box bg="black" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <canvas ref={canvasRef} width="800" height="600" />
    </Box>
  );
};

export default Pong;
