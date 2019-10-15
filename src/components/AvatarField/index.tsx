import React from 'react';
import { Avatar } from '@material-ui/core';

const AvatarField = ({ source, title, record = {} }: any) => (
  <Avatar
    src={record[source]}
    title={title}
    alt="avatar"
  />
);

export default AvatarField;
