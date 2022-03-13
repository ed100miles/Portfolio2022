import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import theme from "../src/theme";
import { motion } from "framer-motion";

const CardsContainer = styled(Box, { theme })({
  display: "flex",
  flexWrap: 'wrap',
  alignItems: "center",
  justifyContent: "center",
  paddingTop: '3vh'
});

const StyledCard = styled(Card, {theme})({
    backgroundColor: theme.palette.blue.shadow.dark,
    border: `solid 1px ${theme.palette.blue.light}`,
    minWidth: '30vw',
    minWidth: '40vw',
    margin: '1vw'
})

export const LandingPageCards = () => {
  return (
    <CardsContainer
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        type: "tween",
        delay: 2.5,
      }}
    >
      <StyledCard>
        <CardMedia />
        <CardContent>
          <Typography variant="h4" component="div">
            My Skills
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </StyledCard>
      <StyledCard>
        <CardMedia />
        <CardContent>
          <Typography variant="h4" component="div">
            Scrabble Cheat
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </StyledCard>
      <StyledCard>
        <CardMedia />
        <CardContent>
          <Typography variant="h4" component="div">
            A.I. Underwriter
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </StyledCard>
    </CardsContainer>
  );
};
