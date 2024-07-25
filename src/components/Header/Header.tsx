import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';

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
    <header className={styles.header}>
      <h1>TESTTASK</h1>
      {/* <Logo /> */}
      <div className={styles.buttonWrapper}>
        <Button title={'Users'} onClickHandler={onUsersClick} />
        <Button title={'Sign up'} onClickHandler={onSignUpClick} />
      </div>
    </header>
  );
};

export default Header;
