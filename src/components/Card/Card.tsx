import React from 'react';
import styles from './Card.module.scss';
import { IUser } from '../../types';

const Card = ({ user }: { user: IUser }) => {
  return (
    <li id={user.id} className={styles.item}>
      <img src={user.photo} alt={`Photo ${user.name}`} />
      <p>{user.name}</p>
      <p>{user.position}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </li>
  );
};

export default Card;
