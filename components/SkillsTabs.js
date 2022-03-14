import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";

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
        overflow: 'scroll',
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
}

export const ProgrammingTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: theme.palette.blue.shadow.medium,
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
          bgcolor: theme.palette.blue.shadow.medium,
        }}
      >
        <Tab label="Python" {...a11yProps(0)} sx={{color: 'white'}}/>
        <Tab label="JavaScript" {...a11yProps(1)} sx={{color: 'white'}}/>
        <Tab label="Bash" {...a11yProps(2)} sx={{color: 'white'}}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        This is the programming language I started learning first, around five years
        ago. Over this time I've develped a thorough understanding of core concepts
        such as working with different data types, logic and flow control, raising
        and handling exceptions, effectively using functions and classes, as well as
        utilising modules from the standard library and wider Python ecosystem.
        Some examples of libraries I'm familiar with are given under the other tabs
        above.
      </TabPanel>
      <TabPanel value={value} index={1}>
        A good understanding of Python allowed me to pick up JavaScript with relative
        ease once the syntax was learned. I now enjoy using JavaScript both in the
        browser and using Node.js, for web development and to provide a better user
        experience for my projects. I'm comfortable writing asynchronous programs,
        using the fetchAPI, and I'm familiar with the newer features implemented in
        ES5 and ES6.
      </TabPanel>
      <TabPanel value={value} index={2}>
        I primarily use distributions based on the Linux operating system. As a
        result I'm at ease working on the CLI, writing bash scripts, and performing
        system administration tasks with Bash.
      </TabPanel>
    </Box>
  );
};
