import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Typography,
  Box,
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { SocialLink } from 'types/games';

const useStyles = makeStyles({
  select: {
    minWidth: 160,
  },
  field: {
    flexGrow: 1,
  },
});

interface Props {
  value: SocialLink[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const socials = ['twitch', 'facebook', 'reddit', 'twitter', 'youTube', 'discord'];

const SocialLinks = (props: Props) => {
  const { value, onChange } = props;
  const [count, setCount] = useState(value.length);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleAddLink = () => {
    value[count] = {
      type: '',
      url: '',
    };

    setCount(count + 1);
  };

  const handleDeleteLink = (index: number) => () => {
    value.splice(index, 1);

    setCount(count - 1);
  };

  return (
    <Box>
      <Typography gutterBottom variant="h6">
        {t('games.fields.socialLinks.label')}
      </Typography>
      {Array(count).fill(0).map((_, i) => (
        <Box key={i} display="flex" marginBottom="16px">
          <FormControl variant="outlined">
            <InputLabel>{t('games.fields.socialLinks.name')}</InputLabel>
            <Select
              value={value[i].type}
              onChange={onChange}
              name={`social_links[${i}].type`}
              className={classes.select}
              label={t('games.fields.socialLinks.name')}
            >
              {socials.map(social => (
                <MenuItem key={social} value={social}>
                  {t(`games.fields.socialLinks.${social}`)}
                </MenuItem>
              ))}
            </Select>

          </FormControl>
          <TextField
            variant="outlined"
            label={t('games.fields.socialLinks.link')}
            name={`social_links[${i}].url`}
            className={classes.field}
            value={value[i].url}
            onChange={onChange}
          />
          <Button
            onClick={handleDeleteLink(i)}
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
        onClick={handleAddLink}
        startIcon={<AddIcon />}
      >
        {t('create')}
      </Button>
    </Box>

  );
};

export default React.memo(SocialLinks);
