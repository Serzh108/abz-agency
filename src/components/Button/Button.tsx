import React, { CSSProperties } from 'react';
import styles from './Button.module.scss';
interface IButton {
  title: string;
  onClickHandler?: () => void;
  type?: 'button' | 'submit';
  customStyles?: CSSProperties;
  disabled?: boolean;
}

const Button = ({
  title,
  onClickHandler,
  type = 'button',
  customStyles,
  disabled = false,
}: IButton) => {
  return (
    <button
      className={styles.button}
      style={customStyles}
      type={type}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
