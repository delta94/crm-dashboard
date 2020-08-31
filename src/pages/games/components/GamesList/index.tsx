import React from 'react';
import styled from 'styled-components/macro';
import { Game } from 'types/games';
import { getGamesRequest } from 'api/games';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  useItemsList,
  Loader,
  H1,
  Caption12,
  GRAY_100,
  PurpleButton,
  H2,
  PlusIcon,
  Input,
  Grid,
} from 'admin-library';

import GameCreate from './components/GameCreate';
import ListItem from './components/ListItem';
import ReviewQualityGuidelines from '../ReviewQualityGuidelines';
import GetPricingHelp from '../GetPricingHelp';
import GamesTableHead from './components/GamesTableHead';
import EmptyList from './components/EmptyList';
import Pagination from './components/Pagination';

const { Row, Col } = Grid;

const GamesPage = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);
  const { t } = useTranslation();
  const {
    currentItems,
    loading,
    page,
    total,
    onItemCreate,
    onChangePage,
    rowsPerPage,
  } = useItemsList<Game>({ request: getGamesRequest, itemName: 'games', rowsPerPage: 14 });
  const isListEmpty = !total;

  if (loading) return <Loader />;

  const handleRowClick = (id: string) => {
    history.push(`/games/${id}`);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <Wrapper>
      <Row gap="32px">
        <Col xs={8}>
          <Title>{t('games.name')}</Title>
          <Description color={GRAY_100}>{t('games.description')}</Description>
          <Line>
            <SearchInput
              placeholder={t('games.game_title')}
              type="search"
              disabled
            />
            <PurpleButton onClick={handleOpenModal}>
              <AddIcon />
              {t('games.add_game')}
            </PurpleButton>
          </Line>
        </Col>
        <Col xs={4} />
      </Row>
      <Row gap="32px">
        <Col xs={8}>
          <TableTitle>{t('games.list_of_games')}</TableTitle>
          <StyledTable>
            <GamesTableHead />
            {!isListEmpty && currentItems.map(game => (
              <ListItem
                key={game.id}
                game={game}
                onClick={handleRowClick}
              />
            ))}
          </StyledTable>
          <StyledPagination
            total={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
          />
          {isListEmpty && <EmptyList />}
        </Col>
        <Col xs={4}>
          <StyledReviewQualityGuidelines />
          <GetPricingHelp />
        </Col>
      </Row>
      <GameCreate
        open={openModal}
        onClose={handleCloseModal}
        onCreate={onItemCreate}
      />
    </Wrapper>
  );
};

export default React.memo(GamesPage);

const Wrapper = styled.div`
  padding: 32px 40px 32px 48px;
`;

const Title = styled(H1)`
  margin-bottom: 8px;
`;

const Description = styled(Caption12)`
  display: block;
  margin-bottom: 24px;
`;

const SearchInput = styled(Input)`
  width: 280px;
`;

const StyledReviewQualityGuidelines = styled(ReviewQualityGuidelines)`
  margin-bottom: 24px;
`;

const TableTitle = styled(H2)`
  margin: 32px 0 4px;
`;

const StyledTable = styled.div``;

const StyledPagination = styled(Pagination)`
  justify-content: flex-end;
  margin-top: 20px;
`;

const AddIcon = styled(PlusIcon)`
  margin-right: 10px;
  flex-shrink: 0;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
