import React, { useEffect, useState } from 'react';
import styles from './GetBlock.module.scss';
// import { getToken } from '../../services/getToken';
import { IToken, IUser } from '../../types';
import { getToken, getUsers } from '../../services/getData';
import Card from '../Card/Card';
import Button from '../Button/Button';

function GetBlock() {
  const [token, setToken] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const receiveToken = async () => {
      const token = await getToken('/token');
      // console.log(' -- token = ', token);
      token?.success && setToken(token.token);
    };

    receiveToken();
  }, []);

  useEffect(() => {
    const receiveUsers = async () => {
      const users = await getUsers('/users');
      // console.log(' -- users -> ', users);
      users?.success && setUsers(users.users);
    };

    token && receiveUsers();
  }, [token]);

  const onShowMoreClick = () => {
    console.log('onShowMoreClick');
  };

  return (
    <section className={styles.wrapper}>
      <h2>Working with GET request</h2>
      {/* <p className={styles.ellipsis}> {token ? token : 'waiting...'} </p> */}
      <ul>
        {users &&
          users.length > 0 &&
          users.map((item) => <Card key={item.id} user={item} />)}
      </ul>
      <Button
        title={'Show more'}
        onClickHandler={onShowMoreClick}
        customStyles={{ width: '120px' }}
      />
    </section>
  );
}

export default GetBlock;
