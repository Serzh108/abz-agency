import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const onUsersClick = () => {
    // fetchUsers();
    console.log('onUsersClick');
  };

  const onSignUpClick = () => {
    //SignUp(.header);
    console.log('onSignUpClick');
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <div className={styles.buttonWrapper}>
          <Button title={'Users'} onClickHandler={onUsersClick} />
          <Button title={'Sign up'} onClickHandler={onSignUpClick} />
        </div>
      </header>
    </div>
  );
};

export default Header;
