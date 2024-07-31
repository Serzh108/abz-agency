import React from 'react';
import styles from './Card.module.scss';
import { IUser } from '../../types';

const Card = ({ user }: { user: IUser }) => {
  return (
    <li id={user.id} className={styles.item}>
      <img src={user.photo} alt={`Photo ${user.name}`} />
      <p className={styles.ellipsis}>{user.name}</p>
      <p className={styles.ellipsis}>{user.position}</p>
      <p className={styles.ellipsis}>{user.email}</p>
      {/* <p>{user.registration_timestamp}</p> */}
      <p>{user.phone}</p>
      {/* <p>{user.id}</p> */}
    </li>
  );
};

export default Card;
