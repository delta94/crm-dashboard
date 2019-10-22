import { gql } from 'apollo-boost';

export const NOTIFICATIONS_SUBSCRIPTION = gql`
  subscription getNotifications {
    notifications(order_by: {created_at: desc}) {
      id
      text
      viewed
      created_at
    }
  }
`;

export const NOTIFICATION_UPDATE = gql`
  mutation viewNotification($id: Int) {
    update_notifications(where: {id: {_eq: $id}}, _set: {viewed: true}) {
      affected_rows
    }
  }
`;
