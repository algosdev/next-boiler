import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { i18n, useTranslation } from '../../i18n';
import style from './productTab.module.scss';
import { useStyles } from './productTabStyle';
import Shops from '../shops/shops';
import Feedback from '../feedback/feedback';
import Overview from '../productDetails/overview';
import TechSpecs from '../productDetails/techspecs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} mt={3}>
          <Typography component={'span'}>{children}</Typography>
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

function ProductTab() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.wrapper}>
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='on'
            aria-label='scrollable force tabs example'
          >
            <Tab
              label={t('overview')}
              {...a11yProps(0)}
              classes={{ selected: classes.selected }}
              disableRipple
              id='product_tab1'
            />

            <Tab
              label={t('techspecs')}
              classes={{ selected: classes.selected }}
              {...a11yProps(1)}
              disableRipple
              id='product_tab2'
            />

            <Tab
              label={t('feedbacks')}
              classes={{ selected: classes.selected }}
              disableRipple
              {...a11yProps(2)}
              id='product_tab3'
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Overview />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TechSpecs />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Feedback />
        </TabPanel>
      </div>
    </div>
  );
}

export default ProductTab;
