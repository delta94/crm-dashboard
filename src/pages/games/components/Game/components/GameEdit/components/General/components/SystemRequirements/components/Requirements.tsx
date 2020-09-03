import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Input, Select, Grid, BLACK_500 } from 'admin-library';
import InputLabel from 'components/InputLabel';

const { Row, Col } = Grid;

const directXOptions = [
  { title: '', value: undefined },
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
  formik: any;
  type: 'minimal' | 'recommended';
  platform: string;
}

const Requirements = (props: Props) => {
  const { formik, platform, type, className } = props;
  const nameSpace = `requirements.${platform}.${type}`;
  const values = formik.values.requirements[platform][type];
  const { t } = useTranslation();
  
  if (!values.diskSpaceUnit) {
    values.diskSpaceUnit = dimensionOptions[0];
  }

  const getLabel = (field: string) =>
    `${t(`game.fields.supported_platforms.${type}`)} ${t(`game.fields.supported_platforms.${field}`)}`;

  return (
    <Wrapper className={className}>
      <FormGroup>
        <StyledInputLabel label={getLabel('os')} required />
        <Input
          name={`${nameSpace}.os`}
          value={values.os}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <Row gap="8px">
        <Col xs={9}>
          <FormGroup>
            <StyledInputLabel label={getLabel('gpu')} required />
            <Input
              name={`${nameSpace}.gpu`}
              value={values.gpu}
              onChange={formik.handleChange}
            />
          </FormGroup>
        </Col>
        <Col xs={3}>
          <StyledInputLabel label={t('game.fields.supported_platforms.directX')} />
          <StyledSelect
            name={`${nameSpace}.directX`}
            value={values.directX}
            onChange={formik.setFieldValue}
            options={directXOptions}
          />
        </Col>
      </Row>
      <FormGroup>
        <StyledInputLabel label={getLabel('cpu')} required />
        <Input
          name={`${nameSpace}.cpu`}
          value={values.cpu}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <StyledInputLabel label={getLabel('ram')} required />
        <Input
          name={`${nameSpace}.ram`}
          value={values.ram}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <Row gap="8px">
        <Col xs={9}>
          <FormGroup>
            <StyledInputLabel label={getLabel('storage')} required />
            <Input
              name={`${nameSpace}.disk_space`}
              value={values.disk_space}
              onChange={formik.handleChange}
            />
          </FormGroup>
        </Col>
        <Col xs={3}>
          <StyledInputLabel label={t('game.fields.supported_platforms.dimension')} />
          <StyledSelect
            name={`${nameSpace}.diskSpaceUnit`}
            value={values.diskSpaceUnit}
            onChange={formik.setFieldValue}
            options={dimensionOptions}
          />
        </Col>
      </Row>
      <FormGroup>
        <StyledInputLabel label={getLabel('other')} />
        <Input
          name={`${nameSpace}.other`}
          value={values.other}
          onChange={formik.handleChange}
        />
      </FormGroup>
    </Wrapper >
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Requirements, areEqual);

const Wrapper = styled.div``;

const StyledSelect = styled(Select)`
  height: 40px;
  border: 1px solid ${BLACK_500};
  border-radius: 3px;

  & .selected {
    background-color: transparent;
  }
`;

export const FormGroup = styled.div`
  min-height: 82px;
`;

const StyledInputLabel = styled(InputLabel)`
  display: block;
  height: 18px;
`;
