import React from 'react';
import style from './section.module.css';

export default function Section({ title, children }) {
  return (
    <>
      <span className={style.title}>{title}</span>
      {children}
    </>
  );
};