import React from 'react';
import compose from 'recompose/compose';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { changeLocale, translate } from 'react-admin';
import { languages } from 'i18nProvider';

interface Props {
  locale: string;
  changeLocale: (payload: string) => void;
}

const LocaleSwitcher: React.FC<Props> = (props: Props) => {
  const { locale, changeLocale } = props;

  const handleChangeLocale = (event: React.ChangeEvent<{ value: string }>) => {
    changeLocale(event.target.value);
  };

  return (
    <Select color="inherit" value={locale} onChange={handleChangeLocale}>
      {languages.map(({ title, value }) => (
        <MenuItem key={value} value={value}>{title}</MenuItem>
      ))}
    </Select>
  );
};

const mapStateToProps = (state: any) => ({
  locale: state.i18n.locale,
});

const enhance = compose<Props, {}>(
  translate,
  connect(
    mapStateToProps,
    { changeLocale }
  ),
);

export default enhance(LocaleSwitcher);
