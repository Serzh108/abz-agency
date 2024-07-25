import React, { CSSProperties } from 'react';
import styles from './Button.module.scss';
interface IButton {
  title: string;
  onClickHandler?: () => void;
  type?: 'button' | 'submit';
  customStyles?: CSSProperties;
}

const Button = ({
  title,
  onClickHandler,
  type = 'button',
  customStyles,
}: IButton) => {
  return (
    <button
      className={styles.button}
      style={customStyles}
      type={type}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;
