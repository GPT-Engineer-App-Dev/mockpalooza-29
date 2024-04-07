import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const Pong = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  }, []);

  return (
    <Box bg="black" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <canvas ref={canvasRef} width="800" height="600" />
    </Box>
  );
};

export default Pong;
