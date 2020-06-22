import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Typography, Box, Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  field: {
    flexGrow: 1,
  },
});

interface Props {
  value: any[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Review = (props: Props) => {
  const { value, onChange } = props;
  const [count, setCount] = useState(value.length);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleAddReview = () => {
    value[count] = {
      press_name: '',
      link: '',
      score: '',
      quote: '',
    };

    setCount(count + 1);
  };

  const handleDeleteReview = (index: number) => () => {
    value.splice(index, 1);

    setCount(count - 1);
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
        <Box key={i} display="flex">
          <TextField
            variant="outlined"
            label={t('games.fields.review.pressName')}
            name={`review[${i}.press_name]`}
            className={classes.field}
            value={value[i].press_name}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label={t('games.fields.review.link')}
            name={`review[${i}.link]`}
            className={classes.field}
            value={value[i].link}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            type="number"
            label={t('games.fields.review.score')}
            name={`review[${i}.score]`}
            className={classes.field}
            value={value[i].score}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label={t('games.fields.review.quote')}
            name={`review[${i}.quote]`}
            className={classes.field}
            value={value[i].quote}
            onChange={onChange}
          />
          <Button
            onClick={handleDeleteReview(i)}
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="primary"
            size="large"
          >
            {t('delete')}
          </Button>
        </Box>
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
