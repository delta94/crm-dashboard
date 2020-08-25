import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FormGroup } from 'pages/games/components/Game/styles';
import { Input, Select, Grid, BLACK_500 } from 'admin-library';
import InputLabel from 'components/InputLabel';

const { Row, Col } = Grid;

const directXOptions = [
  { title: '8', value: 8 },
  { title: '9', value: 9 },
  { title: '10', value: 10 },
  { title: '11', value: 11 },
  { title: '12', value: 12 },
];

const dimensionOptions = [
  { title: 'MB', value: 1 },
  { title: 'GB', value: 1024 },
];

interface Props {
  className?: string;
  value: any;
  onChange: (name: string, value: any) => void;
  type: 'minimal' | 'recommended';
  nameSpace: string;
}

const Requirements = (props: Props) => {
  const { value = {}, onChange, type, nameSpace, className } = props;
  const { t } = useTranslation();

  if (!value.diskSpaceUnit) {
    value.diskSpaceUnit = dimensionOptions[0];
  }

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    onChange(name, value);
  };

  const getLabel = (field: string) =>
    `${t(`game.fields.supported_platforms.${type}`)} ${t(`game.fields.supported_platforms.${field}`)}`;

  return (
    <Wrapper className={className}>
      <FormGroup>
        <InputLabel label={getLabel('os')} required />
        <Input
          name={`${nameSpace}.os`}
          value={value.os}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Row gap="8px">
        <Col xs={9}>
          <FormGroup>
            <InputLabel label={getLabel('gpu')} required />
            <Input
              name={`${nameSpace}.gpu`}
              value={value.gpu}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col xs={3}>
          <InputLabel label={t('game.fields.supported_platforms.directX')} />
          <StyledSelect
            name={`${nameSpace}.directX`}
            value={value.directX}
            onChange={onChange}
            options={directXOptions}
          />
        </Col>
      </Row>
      <FormGroup>
        <InputLabel label={getLabel('cpu')} required />
        <Input
          name={`${nameSpace}.cpu`}
          value={value.cpu}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel label={getLabel('ram')} required />
        <Input
          name={`${nameSpace}.ram`}
          value={value.ram}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Row gap="8px">
        <Col xs={9}>
          <FormGroup>
            <InputLabel label={getLabel('storage')} required />
            <Input
              name={`${nameSpace}.storage`}
              value={value.storage}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col xs={3}>
          <InputLabel label={t('game.fields.supported_platforms.dimension')} />
          <StyledSelect
            name={`${nameSpace}.diskSpaceUnit`}
            value={value.diskSpaceUnit}
            onChange={onChange}
            options={dimensionOptions}
          />
        </Col>
      </Row>
      <FormGroup>
        <InputLabel label={getLabel('other')} required />
        <Input
          name={`${nameSpace}.other`}
          value={value.other}
          onChange={handleInputChange}
        />
      </FormGroup>
    </Wrapper >
  );
};

export default React.memo(Requirements);

const Wrapper = styled.div``;

const StyledSelect = styled(Select)`
  height: 40px;
  border: 1px solid ${BLACK_500};
  border-radius: 3px;

  & .selected {
    background-color: transparent;
  }
`;
