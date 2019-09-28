import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ReferDetails, PatientDetails,ConsultationDetails,InsuranceDetails } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const PatientRevisit = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <ReferDetails />
      <div className={classes.content}>
        <PatientDetails users={users} />
      </div>
      <ConsultationDetails/>
      <InsuranceDetails/>
    </div>
  );
};

export default PatientRevisit;
