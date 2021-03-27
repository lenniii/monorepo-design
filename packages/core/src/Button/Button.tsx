import React, { FC } from 'react';
import style from './style.module.css';

const Button: FC<{ value: string }> = ({ value }) => (
  <input type="button" className={style.prova} value={value} />
);

export default Button;
