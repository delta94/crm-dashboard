import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { Content as ContentType } from 'types/posts';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  makeStyles,
  Fab,
  TextField,
} from '@material-ui/core';
import { Language } from 'types/posts';
import { getLanguagesRequest } from 'api';
import { MarkdownEditor } from 'admin-library';

const useStyles = makeStyles({
  select: {
    minWidth: 160,
  },
  field: {
    flexGrow: 1,
  },
  delete: {
    height: 56,
  },
});

interface Props {
  value: ContentType[];
  onChange: (name: string, value: any) => void;
}

const Content = (props: Props) => {
  const { value, onChange } = props;
  const classes = useStyles();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [count, setCount] = useState(value.length);
  const { t } = useTranslation();

  const handleAddContent = () => {
    value[count] = {
      body: '',
      language_id: languages[0]?.id || 0,
      title: '',
      summary: '',
    };

    setCount(count + 1);
  };

  const handleDeleteContent = (index: number) => () => {
    value.splice(index, 1);

    setCount(count - 1);
  };

  const handleFieldChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    onChange(name, value);
  };

  const handleBodyChange = (name: string) => (value: string) => {
    onChange(name, value);
  };

  const loadLanguages = async () => {
    const { json, error } = await getLanguagesRequest();

    if (!error) setLanguages(json);
  };

  useEffect(() => {
    loadLanguages();
  }, []);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom="24px"
        alignItems="center"
      >
        <Typography gutterBottom variant="h6">
          {t('posts.fields.content.label')}
        </Typography>
        {value.length < languages.length && (
          <Fab color="primary" onClick={handleAddContent}>
            <AddIcon />
          </Fab>
        )}
      </Box>
      {Array(count).fill(0).map((_, i) => (
        <Box key={i} marginBottom="16px">
          <Box key={i} display="flex" marginBottom="16px" justifyContent="space-between">
            <FormControl variant="outlined">
              <InputLabel>{t('language')}</InputLabel>
              <Select
                value={value[i].language_id}
                onChange={handleFieldChange}
                name={`l10n[${i}].language_id`}
                className={classes.select}
                label={t('language')}
              >
                {languages.map(({ id, language }) => (
                  <MenuItem key={id} value={id}>
                    {t(`languages.${language}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={handleDeleteContent(i)}
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="primary"
              size="large"
              className={classes.delete}
            >
              {t('delete')}
            </Button>
          </Box>
          <Box marginBottom="16px">
            <TextField
              name={`l10n[${i}].title`}
              label={t('posts.fields.content.title')}
              variant="outlined"
              value={value[i].title}
              onChange={handleFieldChange}
              className={classes.field}
              fullWidth
            />
          </Box>
          <Box marginBottom="16px">
            <TextField
              name={`l10n[${i}].summary`}
              label={t('posts.fields.content.summary')}
              variant="outlined"
              value={value[i].summary}
              onChange={handleFieldChange}
              className={classes.field}
              rows={3}
              multiline
              fullWidth
            />
          </Box>
          <MarkdownEditor
            value={value[i].body}
            onChange={handleBodyChange(`l10n[${i}].body`)}
          />
        </Box>
      ))}
    </Box>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Content, areEqual);
