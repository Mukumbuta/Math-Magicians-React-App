import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getStyleName = (btn) => {
  const className = {
    0: 'zero',
    1: 'calc-btn',
    2: 'calc-btn',
    3: 'calc-btn',
    4: 'calc-btn',
    5: 'calc-btn',
    6: 'calc-btn',
    7: 'calc-btn',
    8: 'calc-btn',
    9: 'calc-btn',
    AC: 'calc-btn',
    '.': 'calc-btn',
    '+/-': 'calc-btn',
    '%': 'calc-btn',
    '+': 'orange-color',
    '×': 'orange-color',
    '-': 'orange-color',
    '÷': 'orange-color',
    '=': 'orange-color',
  };

  return className[btn];
};

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <button type="button" className={`${getStyleName(label)}`}>{label}</button>
      </div>
    );
  }
}

Button.propTypes = { label: PropTypes.string.isRequired };
export default Button;
