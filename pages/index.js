// import * as React from 'react';
import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import BackgroundParticles from "../components/BackgroundParticles";
export default function Index() {

  return (
    <>
      <Layout>
        <BackgroundParticles/>
        <Typography variant="h4" component="h1" gutterBottom>
          Landing Page
        </Typography>
      </Layout>
    </>
  );
}
