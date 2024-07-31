import React, { useEffect, useState } from 'react';
import styles from './GetBlock.module.scss';
// import { getToken } from '../../services/getToken';
import {
  // IToken,
  IUser,
} from '../../types';
import { getToken, getUsers } from '../../services/getData';
import Card from '../Card/Card';
import Button from '../Button/Button';

function GetBlock() {
  const [token, setToken] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

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
      const endpoint = `/users?page=${currentPage}&count=6`;
      const users = await getUsers(endpoint);
      // console.log(' -- users -> ', users);
      users?.success && setUsers(users.users);
      users?.total_pages && setLastPage(users?.total_pages);
    };

    token && receiveUsers();
  }, [token, currentPage]);

  const sortAlg = (a: IUser, b: IUser) =>
    b.registration_timestamp - a.registration_timestamp;

  const onShowMoreClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Working with GET request</h2>
      {/* <p className={styles.ellipsis}> {token ? token : 'waiting...'} </p> */}
      <ul>
        {users &&
          users.length > 0 &&
          users.sort(sortAlg).map((item) => <Card key={item.id} user={item} />)}
      </ul>
      <Button
        title={'Show more'}
        onClickHandler={onShowMoreClick}
        customStyles={{ width: '120px' }}
        disabled={currentPage >= lastPage}
      />
    </section>
  );
}

export default GetBlock;
