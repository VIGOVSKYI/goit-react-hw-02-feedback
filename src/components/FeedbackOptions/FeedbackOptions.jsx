import React from 'react';
import style from './feedbackOptions.module.css';

export default function FeedbackOptions({ onClick }) {
  return (
    <>
      <div className={style.btnWrapper}>
        <button className={style.btn}
          type="button"
          name="good"
          onClick={() => {
            onClick('good');
          }}
        >
          Good
        </button>
        <button className={style.btn}
          type="button"
          name="neutral"
          onClick={() => {
            onClick('neutral');
          }}
        >
          Neutral
        </button>
        <button className={style.btn}
          type="button"
          name="bad"
          onClick={() => {
            onClick('bad');
          }}
        >
          Bad
        </button>
      </div>
    </>
  );
};