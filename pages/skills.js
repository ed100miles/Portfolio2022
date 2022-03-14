import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled
} from "@mui/material";
import { useState } from "react";
import Layout from "../components/Layout";
import theme from "../src/theme";
import { ExpandMore} from "@mui/icons-material";
import { HomeContentContainer } from ".";
import { ProgrammingTabs } from "../components/SkillsTabs";

const SkillsAccordionBox = styled(Box, { theme })({
  maxHeight: "60vh",
  maxWidth: "80vw",
  backgroundColor: theme.palette.blue.dark,
  borderRadius: "1vmin",
  opacity: ".9",
  overflow: "scroll",
  marginLeft: "5vw",
  marginRight: "5vw",
});

const StyledExpandIcon = styled(ExpandMore, { theme })({
  color: theme.palette.blue.shadow.light,
});

const StyledAccordion = styled(Accordion, { theme })({
  backgroundColor: theme.palette.blue.shadow.dark,
});


export default function Skills() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <HomeContentContainer>
        <Typography variant="h2" gutterBottom>
          Technical Skills
        </Typography>
        <SkillsAccordionBox>
          <StyledAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<StyledExpandIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h4">
                Programming
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProgrammingTabs/>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<StyledExpandIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h4">
                Front End
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p2">
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque convallis
                laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<StyledExpandIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography variant="h4">
                Back End
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p2">
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<StyledExpandIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography variant="h4">
                Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p2">
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<StyledExpandIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography variant="h4">
                Version Control
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p2">
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<StyledExpandIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography variant="h4">
                Also Familiar With...
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p2">
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </SkillsAccordionBox>
      </HomeContentContainer>
    </Layout>
  );
}
