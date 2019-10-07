import React, { useState } from 'react';
import compose from 'recompose/compose';
import { translate, TranslationContextProps } from 'ra-core';
import { Card, withStyles, Button, CardContent, Typography, CardHeader } from '@material-ui/core';

import Stepper from './components/Stepper';
import { styles } from './styles';

interface Props {
  classes: any;
  status?: string;
}

const Documents = (props: Props & TranslationContextProps) => {
  const { translate, classes } = props;
  const [data, setData] = useState();
  const [status, setStatus] = useState(props.status || 'review');
  const [fillingDone, setFillingDone] = useState(false);
  const handleSubmit = () => {
    switch (status) {
      case 'draft':
        setStatus('review');
        console.log(data);
        break;

      case 'review':
        setStatus('draft');
        break;

      default:
        break;
    }
  };

  const handleFormFilling = (payload: object) => {
    setFillingDone(true);
    setData(payload);
  };

  const SubmitButton = (
    <Button
      variant="raised"
      disabled={(status === 'draft' && !fillingDone) || status === 'approved'}
      color="primary"
      className={classes.button}
      onClick={handleSubmit}
    >
      {translate(`pages.documents.status.${status}.submit`)}
    </Button>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        title={translate('pages.documents.title')}
        action={SubmitButton}
      />
      <CardContent>
        <Stepper key={status} active={status === 'draft'} onFinish={handleFormFilling} />
      </CardContent>
      <CardContent>
        <Typography variant="title">
          {translate(`pages.documents.status.${status}.title`)}
          {SubmitButton}
        </Typography>
      </CardContent>
    </Card>
  );
};

const enhance = compose<Props & TranslationContextProps, {}>(
  translate,
  withStyles(styles)
);

export default enhance(Documents);
