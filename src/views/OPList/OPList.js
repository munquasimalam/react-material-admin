import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { OPSearch, OPTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const OPList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <OPSearch />
      <div className={classes.content}>
        <OPTable users={users} />
      </div>
    </div>
  );
};

export default OPList;
