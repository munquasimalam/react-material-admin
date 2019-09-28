import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { RegistrationSearch, RegistrationTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const RegistrationList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <RegistrationSearch />
      <div className={classes.content}>
        <RegistrationTable users={users} />
      </div>
    </div>
  );
};

export default RegistrationList;
