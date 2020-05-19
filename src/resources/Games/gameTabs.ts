import GameGeneral from './GameGeneral';
import GameDescription from './GameDescription';
import GameRatings from './GameRatings';
import GameMedia from './GameMedia';

const tabs = [
  {
    label: 'general',
    Component: GameGeneral,
  },
  {
    label: 'description',
    Component: GameDescription,
  },
  {
    label: 'ratings',
    Component: GameRatings,
  },
  {
    label: 'media',
    Component: GameMedia,
  },
];

export default tabs;
