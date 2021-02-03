import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import CategoryTag from './CategoryTag';


const StyledTabs = withStyles({
  root: {
    textTransform: 'none'
  },
  flexContainer: {
    backgroundColor: 'white',
  },
})(Tabs);

const StyledTab = withStyles({
  root: {
    textTransform: 'none'
  },
})(Tab)

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CategoryTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <ThemeProvider theme={mainTheme}>
    <div>
      <AppBar position="static" elevation={0}>
        <StyledTabs variant="fullWidth" indicatorColor="primary" textColor="primary" value={value} variant="scrollable" onChange={handleChange} scrollButtons="auto" aria-label="simple tabs example">
            <StyledTab label="Education" {...a11yProps(0)} />
            <StyledTab label="Game" {...a11yProps(1)}/>
            <StyledTab label="Fiction" {...a11yProps(2)}/>
        </StyledTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
            <CategoryTag/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <CategoryTag/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <CategoryTag/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
