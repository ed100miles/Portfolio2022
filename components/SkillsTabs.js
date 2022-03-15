import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import SkillsCopy from "../public/copy/skills.json";


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{
        bgcolor: theme.palette.blue.dark,
        width: "100%",
        overflow: "scroll",
      }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

export const MakeSkillsTabs = ({skill}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: theme.palette.blue.shadow.dark,
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          bgcolor: theme.palette.blue.mediumDark,
          borderTopLeftRadius:'1vmin',
          borderBottomLeftRadius:'1vmin'
        }}
      >
        {Object.keys(SkillsCopy[skill]).map((key) => (
          <Tab label={key} {...a11yProps(0)} sx={{ color: "white" }} />
        ))}
      </Tabs>
      {Object.keys(SkillsCopy[skill]).map((key, index) => {
        return (
          <TabPanel value={value} index={index}>
            {SkillsCopy[skill][key]}
          </TabPanel>
        );
      })}
    </Box>
  );
};
