import React from 'react';
import styles from './Banner.module.scss';
import Button from '../Button/Button';

const Banner = () => {
  const onSignUpClick = () => {
    //SignUp();
    console.log('onSignUpClick');
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Test assignment for front-end developer</h2>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button title={'Sign up'} onClickHandler={onSignUpClick} />
      </div>
    </div>
  );
};

export default Banner;
