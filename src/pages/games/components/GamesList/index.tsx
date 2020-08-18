import React from 'react';
import styled from 'styled-components';
import { Game } from 'types/games';
import { getGamesRequest } from 'api/games';
import { useItemsList, Loader, H1, Caption12, GRAY_100, BLACK_600, PurpleButton, H2 } from 'admin-library';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  TablePagination,
  Grid,
  Box,
  InputAdornment,
  FormControl,
  OutlinedInput,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import GameCreate from './components/GameCreate';
import ListItem from './components/ListItem';
import ReviewQualityGuidelines from '../ReviewQualityGuidelines';
import GetPricingHelp from '../GetPricingHelp';
import GamesTableHead from './components/GamesTableHead';
import EmptyList from './components/EmptyList';

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
    onChangeRowsPerPage,
    onChangePage,
    rowsPerPage,
  } = useItemsList<Game>(getGamesRequest, 'games');
  const isListEmpty = !total;

  if (loading) return <Loader />;

  const handleRowClick = (id: string) => {
    history.push(`/games/${id}`);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Title>
            {t('games.name')}
          </Title>
          <Description color={GRAY_100}>
            {t('games.description')}
          </Description>
          <Box display="flex" justifyContent="space-between">
            <StyledFormControl>
              <SearchInput
                placeholder={t('games.game_title')}
                startAdornment={(
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )}
                disabled
              />
            </StyledFormControl>
            <PurpleButton
              onClick={handleOpenModal}
              startIcon={<AddIcon />}
            >
              {t('games.add_game')}
            </PurpleButton>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <TableTitle>
            {t('games.list_of_games')}
          </TableTitle>
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

          <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
          />
          {isListEmpty && <EmptyList />}
        </Grid>
        <Grid item xs={4}>
          <StyledReviewQualityGuidelines />
          <GetPricingHelp />
        </Grid>
      </Grid>

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

const StyledFormControl = styled(FormControl)`
  width: 280px;
`;

const SearchInput = styled(OutlinedInput)`
  && {
    color: ${GRAY_100};
    height: 40px;
    font-size: 14px;
    line-height: 22px;
  }

  && .MuiOutlinedInput-notchedOutline {
    border-color: ${BLACK_600};
  }
`;

const StyledReviewQualityGuidelines = styled(ReviewQualityGuidelines)`
  margin-bottom: 24px;
`;

const TableTitle = styled(H2)`
  margin: 32px 0 4px;
`;

const StyledTable = styled.div``;
