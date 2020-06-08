import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  makeStyles,
  capitalize,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@material-ui/core';

import Requirements from './components/Requirements';

const allPlatforms = ['windows', 'macOS', 'linux'];

const useStyles = makeStyles({
  tab: {
    padding: '24px 0',
  },
  select: {
    minWidth: 160,
    marginBottom: 16,
  },
});

interface Props {
  platformsValue: string[];
  requirementsValue: any;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const SystemRequirements = (props: Props) => {
  const { platformsValue, requirementsValue, onChange } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(platformsValue[0]);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    if (activeTab) return;

    setActiveTab(platformsValue[0]);
    // eslint-disable-next-line
  }, [props]);

  return (
    <Box>
      <Typography gutterBottom variant="h6">
        {t('games.fields.supportedPlatforms.label')}
      </Typography>
      <FormControl variant="outlined">
        <InputLabel>{t('games.fields.supportedPlatforms.platform')}</InputLabel>
        <Select
          value={platformsValue}
          onChange={onChange}
          name="platforms"
          className={classes.select}
          label={t('games.fields.supportedPlatforms.platform')}
          multiple
        >
          {allPlatforms.map(platform => (
            <MenuItem key={platform} value={platform}>{capitalize(platform)}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography gutterBottom variant="h6">
        {t('games.fields.supportedPlatforms.requirements')}
      </Typography>
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={activeTab}
          onChange={handleTabChange}
        >
          {platformsValue.map(platform => (
            <Tab key={platform} label={platform} value={platform} />
          ))}
        </Tabs>
      </Paper>

      {
        platformsValue.map(platform => (
          <div key={platform} className={classes.tab} hidden={activeTab !== platform}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Requirements
                  value={requirementsValue[platform]?.minimal}
                  onChange={onChange}
                  title={t('games.fields.supportedPlatforms.minimal')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Requirements
                  value={requirementsValue[platform]?.minimal}
                  onChange={onChange}
                  title={t('games.fields.supportedPlatforms.recommended')}
                />
              </Grid>
            </Grid>
          </div>
        ))
      }
    </Box >
  );
};

export default React.memo(SystemRequirements);
