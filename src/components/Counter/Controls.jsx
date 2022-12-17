import React from 'react';
import './Controls.css';

export const Controls = ({ onIncrement, onDecrement, onReset }) => (
  <div className="counter__controls">
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
    <button type="button" onClick={onReset}>
      Сбросить на 0
    </button>
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
  </div>
);
