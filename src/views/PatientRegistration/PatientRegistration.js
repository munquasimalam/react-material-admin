import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ReferAndPatientDetails } from './components';
import { ConsultationDetails,InsuranceDetails } from '../PatientRevisit/components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const PatientRegistration = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <ReferAndPatientDetails />
      <ConsultationDetails/>
      <InsuranceDetails/>
    </div>
  );
};

export default PatientRegistration;
