import React, { FC, useState } from 'react';
import style from './style.module.css';

const Button: FC<{ value: string }> = ({ value }) => {
  const [state, setState] = useState();
  return <input type="button" className={style.prova} value={value} />;
};

export default Button;
