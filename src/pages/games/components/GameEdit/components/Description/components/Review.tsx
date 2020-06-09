/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Typography, Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface Props {
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Review = (props: Props) => {
  const { value, onChange } = props;
  const [count, setCount] = useState(value.length);
  const { t } = useTranslation();

  const handleAddReview = () => {
    value[count] = {
      press_name: '',
      link: '',
      score: '',
      quote: '',
    };

    setCount(count + 1);
  };

  return (
    <Box>
      <Typography gutterBottom variant="h6">
        {t('games.fields.review.label')}
      </Typography>
      <Typography gutterBottom variant="body1">
        {t('games.fields.review.description')}
      </Typography>
      {Array(count).fill(0).map((_, i) => (
        <div key={i}>
          <TextField
            variant="outlined"
            label={t('games.fields.review.pressName')}
            name={`review[${i}.press_name]`}
            value={value[i].press_name}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label={t('games.fields.review.link')}
            name={`review[${i}.link]`}
            value={value[i].link}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            type="number"
            label={t('games.fields.review.score')}
            name={`review[${i}.score]`}
            value={value[i].score}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label={t('games.fields.review.quote')}
            name={`review[${i}.quote]`}
            value={value[i].quote}
            onChange={onChange}
          />
        </div>
      ))}
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleAddReview}
        startIcon={<AddIcon />}
      >
        {t('create')}
      </Button>
    </Box>

  );
};

export default React.memo(Review);
