// import * as React from 'react';
import { Typography, Box, Paper, Container } from "@mui/material";
import Layout from "../components/Layout";
import theme from "../src/theme";

export default function Index() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: theme.palette.blue.shadow.light }}>
        Home Page
      </Typography>
    </Layout>
  );
}
