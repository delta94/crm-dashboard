import React, { useState } from 'react';
import compose from 'recompose/compose';
import { TranslationContextProps, translate } from 'ra-core';
import { withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';

import { StepCompany, StepBanking, StepContact, StepFinish } from '../components';
import { styles } from './styles';
import mockInitial from './mockInitial';

interface Props {
  classes: any;
  isLoading: boolean;
  active: boolean;
  initialValues?: any;
  onFinish: (payload: object) => void;
}

const DocumentsStepper = (props: Props & TranslationContextProps) => {
  const { classes, translate, onFinish, active, initialValues = mockInitial } = props;
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    translate('pages.documents.company'),
    translate('pages.documents.contact'),
    translate('pages.documents.banking'),
  ];
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleFinish = (payload: object) => {
    onFinish(payload);
    handleNext();
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <StepCompany
            disabled={!active}
            onSubmit={handleNext}
            initialValues={initialValues}
          />);
      case 1:
        return (
          <StepContact
            disabled={!active}
            onSubmit={handleNext}
            onPrev={handleBack}
          />);
      case 2:
        return (
          <StepBanking
            disabled={!active}
            onSubmit={handleNext}
            onPrev={handleBack}
          />);
      case 3:
        return (
          <StepFinish
            disabled={!active}
            onSubmit={handleFinish}
            onPrev={handleBack}
          />
        );
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length + 1 ? (
        <Typography variant="title" className={classes.warning}>
          {translate('pages.documents.finish')}
        </Typography>
      ) : getStepContent(activeStep)}
    </div>
  );
};

const enhance = compose<Props & TranslationContextProps, any>(
  translate,
  withStyles(styles)
);

export default enhance(DocumentsStepper);
