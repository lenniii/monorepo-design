import React, { FC, useState } from 'react';
import style from './style.module.css';

const Button: FC = () => {
  const [state, setState] = useState();
  return <input type="button" className={style.prova} value="ciaone" />;
};

export default Button;
