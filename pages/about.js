import { Typography } from "@mui/material";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <>
      <Layout>
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <ul>
          <li>
            I am a full-stack developer looking for a full-time position. Python is
            my language of choice but I am also confident with JavaScript, HTML and
            CSS.
          </li>
          <li>
            I particularly enjoy computer vision, natural language programming and
            machine learning projects, but so long as I am writing code and learning
            new things, I'm happy!
          </li>
          <li>
            I strive to write robust, adaptable and reusable code through use of
            object-oriented design principles of modularity, abstraction and
            encapsulation. Knowledge of common software design patterns and
            application of SOLID design principles help me achieve this goal.
          </li>
          <li>
            I enjoy producing efficient programs through the selection and
            implementation of suitable data structures and algorithms to reduce
            computational complexity.
          </li>
          <li>
            I understand the importance of thoroughly testing code before it is used
            in a production environment. So I am experienced writing automated unit
            and integration tests, and with the test driven development methodology.
          </li>
        </ul>
      </Layout>
    </>
  );
}
