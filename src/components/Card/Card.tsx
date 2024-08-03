import React from 'react';
import styles from './Card.module.scss';
import { IUser } from '../../types';
import { Tooltip } from 'react-tooltip';

const Card = ({ user }: { user: IUser }) => {
  return (
    <li id={user.id} className={styles.item}>
      <img src={user.photo} alt={`Photo ${user.name}`} />
      <p
        className={styles.ellipsis}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={user.name}
        data-tooltip-place="bottom"
      >
        {user.name}
      </p>
      <p
        className={styles.ellipsis}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={user.position}
        data-tooltip-place="bottom"
      >
        {user.position}
      </p>
      <p
        className={styles.ellipsis}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={user.email}
        data-tooltip-place="bottom"
      >
        {user.email}
      </p>
      {/* <p>{user.registration_timestamp}</p> */}
      <p>{user.phone}</p>
      {/* <p>{user.id}</p> */}
      <Tooltip
        id="my-tooltip"
        className={styles.tooltip}
        classNameArrow={styles.tooltipArrow}
      />
    </li>
  );
};

export default Card;
