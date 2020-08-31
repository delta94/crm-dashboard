import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Review } from 'types/games';
import { Grid, Input, inputStyles, BLACK_500, DeleteIcon, RED_500 } from 'admin-library';
import InputLabel from 'components/InputLabel';

const { Row, Col } = Grid;
const scoreRegexp = /^\d+\/?\d*$/i;
const scorePlaceholder = '8/10';
const linkPlaceholder = 'https://';

interface Props {
  className?: string;
  onDelete?: (index: number) => void;
  value: Review;
  onChange: (name: string, value: any) => void;
  index: number;
  name: string;
}

const PressAgent = (props: Props) => {
  const { className, onDelete, value, name, index, onChange } = props;
  const { t } = useTranslation();

  const handleChange = (e: SyntheticEvent<any>) => {
    const { name, value } = e.currentTarget;

    onChange(name, value);
  };

  const handleChangeScore = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (value && !scoreRegexp.test(value)) return;

    onChange(name, value);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(index);
    }
  };

  return (
    <Wrapper className={className}>
      <Row gap="24px">
        <Col xs={6}>
          <Row gap="8px">
            <Col xs={9}>
              <FormGroup>
                <InputLabel label={t('game.fields.review.press_agent_name')} />
                <Input
                  name={`${name}.press_name`}
                  value={value.press_name}
                  onChange={handleChange}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <InputLabel label={t('game.fields.review.score')} />
                <Input
                  name={`${name}.score`}
                  value={value.score}
                  onChange={handleChangeScore}
                  placeholder={scorePlaceholder}
                />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <InputLabel label={t('game.fields.review.link')} />
                <Input
                  name={`${name}.link`}
                  value={value.link}
                  onChange={handleChange}
                  placeholder={linkPlaceholder}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <InputLabel label={t('game.fields.review.quote')} />
            <Quote
              name={`${name}.quote`}
              value={value.quote}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      {!!onDelete && (
        <Delete>
          <Line />
          <StyledDeleteIcon onClick={handleDelete} />
        </Delete>
      )}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PressAgent, areEqual);

const Wrapper = styled.div``;

const FormGroup = styled.div`
  min-height: 82px;
`;

const Quote = styled.textarea`
  ${inputStyles}
  resize: none;
  height: 122px;
  padding: 9px 12px;
`;

const Delete = styled.div`
  display: flex;
  margin: 4px 0 20px;
  align-items: center;
`;

const Line = styled.div`
  height: 1px;
  background-color: ${BLACK_500};
  flex-grow: 1;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
  flex-shrink: 0;
  margin: 0 6px 0 11px;

  :hover {
    path {
      fill: ${RED_500};
    }
  }
`;
