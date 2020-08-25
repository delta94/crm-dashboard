import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { Game } from 'types/games';
import { getGameByIdRequest } from 'api/games';
import { Loader, Grid } from 'admin-library';

import GameEdit from './components/GameEdit';
import ReviewQualityGuidelines from '../ReviewQualityGuidelines';
import GetPricingHelp from '../GetPricingHelp';

const { Row, Col } = Grid;

const GamesPage = () => {
  const [game, setGame] = useState<Game | undefined>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id = '' } = useParams();

  const goToGames = () => {
    history.push('/games');
  };

  const getGame = async () => {
    const { json, error } = await getGameByIdRequest(id);

    if (error) {
      alert(error.message);
    }

    setGame(json);
    setLoading(false);
  };

  useEffect(() => {
    getGame();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  if (!game) {
    goToGames();
    return null;
  }

  return (
    <Wrapper>
      <Row gap="48px">
        <Col xs={8}>
          <GameEdit game={game} onUpdate={goToGames} />
        </Col>
        <Col xs={4}>
          <StyledReviewQualityGuidelines />
          <GetPricingHelp />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default GamesPage;

const Wrapper = styled.div``;

const StyledReviewQualityGuidelines = styled(ReviewQualityGuidelines)`
  margin-bottom: 24px;
`;
