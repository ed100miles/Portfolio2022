import { useState } from "react";
import { Typography, Box } from "@mui/material";
import Layout from "../../components/Layout";
import theme from "../../src/theme";

const Square = ({index, letter, selected}) => {
  return (
    <Box
      key={index}
      sx={{
        height: "4vmin",
        width: "4vmin",
        backgroundColor: selected
          ? theme.palette.blue.light
          : theme.palette.blue.dark,
        borderTop: `solid 1px ${theme.palette.blue.shadow.medium}`,
        borderRight: `solid 1px ${theme.palette.blue.shadow.medium}`,
        borderLeft:
          index % 15 == 0
            ? `solid 1px ${theme.palette.blue.shadow.medium}`
            : "",
        borderBottom:
          index > 209 ? `solid 1px ${theme.palette.blue.shadow.medium}` : "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: theme.palette.blue.medium,
        },
      }}
    >
      <Typography
        sx={{
          color: selected ? theme.palette.blue.dark : theme.palette.blue.light,
        }}
      >
        {letter}
      </Typography>
    </Box>
  );
};

export default function Index() {
  const [board, setBoard] = useState(Array(225).fill(""));
  const [selectedSquare, setSelectedSquare] = useState(49);
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
            component="form"
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
