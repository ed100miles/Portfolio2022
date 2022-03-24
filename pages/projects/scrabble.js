import { useState } from "react";
import { Typography, Box, styled } from "@mui/material";
import Layout from "../../components/Layout";
import theme from "../../src/theme";
import { motion } from "framer-motion";
import { MoveDown } from "@mui/icons-material";

const SquareBox = styled(Box)({
  height: "4vmin",
  width: "4vmin",
  borderTop: `solid 1px ${theme.palette.blue.shadow.medium}`,
  borderRight: `solid 1px ${theme.palette.blue.shadow.medium}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.blue.shadow.medium,
  },
});

export default function Index() {
  const [board, setBoard] = useState(Array(225).fill(""));
  const [selectedSquare, setSelectedSquare] = useState(112);
  const [direction, setDirection] = useState("right");

  const setDirectionHandler = (rule) => {
    if (rule === "moveLeft") {
      setSelectedSquare(selectedSquare - 1);
    } else if (rule === "moveRight") {
      setSelectedSquare(selectedSquare + 1);
    } else if (rule === "moveUp") {
      setSelectedSquare(selectedSquare - 15);
    } else if (rule === "moveDown") {
      setSelectedSquare(selectedSquare + 15);
    } else if (direction === "right" && (selectedSquare + 1) % 15 !== 0) {
      setSelectedSquare(selectedSquare + 1);
    } else if (direction === "down" && selectedSquare < 210) {
      setSelectedSquare(selectedSquare + 15);
    }
  };

  const keyUpHandler = (e) => {
    console.log(e.key);
    const isLetter = e.key.match(/^[A-z]$/g) !== null;
    const newBoard = [...board];
    if (isLetter) {
      newBoard[selectedSquare] = e.key;
      setBoard(newBoard);
      setDirectionHandler();
    } else if (e.key === "Backspace") {
      newBoard[selectedSquare] = "";
      setBoard(newBoard);
      if (direction === "right" && selectedSquare % 15 !== 0) {
        setDirectionHandler("moveLeft");
      } else if (direction === "down" && selectedSquare > 14) {
        setDirectionHandler("moveUp");
      }
    }
    switch (e.key) {
      case "ArrowLeft": {
        if (selectedSquare !== 0) {
          setDirectionHandler("moveLeft");
        }
      }
      case "ArrowRight": {
        if (selectedSquare !== 225){
          setDirectionHandler('moveRight')
        }
      }
      case 'ArrowDown': {
        if (selectedSquare <210){setDirectionHandler('moveDown')}
      }
      // TODO: MoveUP
    }
  };

  const Square = ({ index, letter, selected }) => {
    return (
      <SquareBox
        key={`squareBox-${index}`}
        sx={{
          borderLeft:
            index % 15 == 0 ? `solid 1px ${theme.palette.blue.shadow.medium}` : "",
          borderBottom:
            index > 209 ? `solid 1px ${theme.palette.blue.shadow.medium}` : "",
        }}
        component={motion.div}
        initial={selected ? { backgroundColor: theme.palette.blue.dark } : {}}
        animate={selected ? { backgroundColor: theme.palette.blue.medium } : {}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        onClick={() => setSelectedSquare(index)}
      >
        <Typography sx={{ color: theme.palette.blue.light }}>{letter}</Typography>
      </SquareBox>
    );
  };

  return (
    <>
      <Layout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: "column",
            "&[tabindex]": {
              outline: "none",
            },
          }}
          onKeyUp={(e) => keyUpHandler(e)}
          tabIndex="1"
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Scrabble
          </Typography>
          <Box
            // component="form"
            sx={{
              maxWidth: "61vmin",
              maxHeight: "60vmin",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {board.map((letter, index) => {
              return (
                <Square
                  index={index}
                  key={index}
                  letter={letter}
                  selected={index === selectedSquare}
                />
              );
            })}
          </Box>
        </Box>
      </Layout>
    </>
  );
}
