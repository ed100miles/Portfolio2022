import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  styled,
} from "@mui/material";
import Layout from "../components/Layout";
import theme from "../src/theme";
import { motion } from "framer-motion";
import { LandingPageCards}  from "../components/Cards"

const HomeContentContainer = styled(Box, { theme })({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100%",
  paddingBottom: "5%"
});

export default function Index() {
  return (
    <Layout>
      <HomeContentContainer>
        <Typography
          variant="h1"
          gutterBottom
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "tween",
            delay: 0,
          }}
        >
          Hi!
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "tween",
            delay: 0.8,
          }}
        >
          I'm Ed Miles - Full stack developer.
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "tween",
            delay: 1.5,
          }}
        >
          Thanks for visiting my site.
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "tween",
            delay: 2,
          }}
        >
          Here are some highlights:
        </Typography>
        <LandingPageCards/>
      </HomeContentContainer>
    </Layout>
  );
}
