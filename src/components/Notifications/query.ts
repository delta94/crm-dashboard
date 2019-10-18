import { gql } from 'apollo-boost';

export const NOTIFICATIONS_SUBSCRIPTION = gql`
  subscription getNotifications {
    notifications(order_by: {timestamp: desc}) {
      id
      text
      timestamp
      viewed
    }
  }
`;
