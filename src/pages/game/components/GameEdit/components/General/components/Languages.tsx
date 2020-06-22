import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Checkbox,
  Select,
  MenuItem,
  makeStyles,
  Box,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const languages = ['eng', 'rus', 'deu', 'esp'];

const useStyles = makeStyles({
  select: {
    width: 160,
  },
  lang: {
    paddingLeft: 0,
  },
});

interface Props {
  value: any[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Languages = (props: Props) => {
  const { value, onChange } = props;
  const [count, setCount] = useState(value.length);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleAddLanguage = () => {
    value[count] = {
      language: '',
      interface: false,
      audio: false,
      subtitles: false,
    };

    setCount(count + 1);
  };

  const handleDeleteLanguage = (index: number) => () => {
    value.splice(index, 1);

    setCount(count - 1);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('games.fields.supportedLanguages.label')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t('games.fields.supportedLanguages.description')}
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">
              {t('games.fields.supportedLanguages.interface')}
            </TableCell>
            <TableCell align="center">
              {t('games.fields.supportedLanguages.audio')}
            </TableCell>
            <TableCell align="center">
              {t('games.fields.supportedLanguages.subtitles')}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((lang, i) => (
            <TableRow key={i}>
              <TableCell className={classes.lang}>
                <Select
                  value={lang.language}
                  name={`localization[${i}].language`}
                  variant="outlined"
                  onChange={onChange}
                  className={classes.select}
                >
                  {languages.map(lang => (
                    <MenuItem key={lang} value={lang}>
                      {t(`games.languages.${lang}`)}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell align="center">
                <Checkbox
                  color="primary"
                  name={`localization[${i}].interface`}
                  checked={lang.interface}
                  onChange={onChange}
                />
              </TableCell>
              <TableCell align="center">
                <Checkbox
                  color="primary"
                  name={`localization[${i}].audio`}
                  checked={lang.audio}
                  onChange={onChange}
                />
              </TableCell>
              <TableCell align="center">
                <Checkbox
                  color="primary"
                  name={`localization[${i}].subtitles`}
                  checked={lang.subtitles}
                  onChange={onChange}
                />
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={handleDeleteLanguage(i)}
                  startIcon={<DeleteIcon />}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  {t('delete')}
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleAddLanguage}
        startIcon={<AddIcon />}
      >
        {t('create')}
      </Button>
    </Box>
  );
};

export default React.memo(Languages);
