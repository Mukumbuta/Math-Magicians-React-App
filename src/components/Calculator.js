import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Display from './Display';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, e.target.textContent));
    // console.log(e.target.textContent)
    // console.log(this.state)
  }

  render() {
    const { total } = this.state;
    const clickFunc = this.clickHandler;

    return (
      <div className="calc-frame">
        <div className="main-calc">
          <Display value={total || '0'} />
          <div className="btn-row">
            <Button eventsHandler={clickFunc} label="AC" />
            <Button eventsHandler={clickFunc} label="+/-" />
            <Button eventsHandler={clickFunc} label="%" />
            <Button eventsHandler={clickFunc} label="÷" />
          </div>
          <div className="btn-row">
            <Button eventsHandler={clickFunc} label="7" />
            <Button eventsHandler={clickFunc} label="8" />
            <Button eventsHandler={clickFunc} label="9" />
            <Button eventsHandler={clickFunc} label="x" />
          </div>
          <div className="btn-row">
            <Button eventsHandler={clickFunc} label="4" />
            <Button eventsHandler={clickFunc} label="5" />
            <Button eventsHandler={clickFunc} label="6" />
            <Button eventsHandler={clickFunc} label="+" />
          </div>
          <div className="btn-row">
            <Button eventsHandler={clickFunc} label="1" />
            <Button eventsHandler={clickFunc} label="2" />
            <Button eventsHandler={clickFunc} label="3" />
            <Button eventsHandler={clickFunc} label="-" />
          </div>
          <div className="last-btn-row btn-row">
            <div className="zero-btn">
              <Button eventsHandler={clickFunc} label="0" />
            </div>
            <Button eventsHandler={clickFunc} label="." />
            <Button eventsHandler={clickFunc} label="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
