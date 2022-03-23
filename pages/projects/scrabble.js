import { useState } from "react";
import { Typography, Box, styled } from "@mui/material";
import Layout from "../../components/Layout";
import theme from "../../src/theme";
import { motion } from "framer-motion";

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
  }
})

export default function Index() {
  const [board, setBoard] = useState(Array(225).fill(""));
  const [selectedSquare, setSelectedSquare] = useState(112);

  const keyUpHandler = (e) => {
    const newBoard = [...board]
    newBoard[selectedSquare] = e.key
    setBoard(newBoard)
    setSelectedSquare(selectedSquare+1)
    console.log(e.key)
  }

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
        onClick={()=>setSelectedSquare(index)}
      >
        <Typography
          sx={{
            color: theme.palette.blue.light
          }}
        >
          {letter}
        </Typography>
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
          }}
      
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
            onKeyUp={(e) => keyUpHandler(e)}
            tabIndex={-1}
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
