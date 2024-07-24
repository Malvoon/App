import { useState } from 'react';

const Calculator = () => {
  const [changed, setChanged] = useState(false);
  const [lastDisplay, setLastDisplay] = useState('');
  const [display, setDisplay] = useState('');

  function addNumber(x: string) {
    if (display === '0') {
      setDisplay(x);
    }
    else {
      setDisplay(display + x);
    }
  }

  function operator(op: string) {
    if (op === '-') {
      setDisplay(op);
    }
    else if (op === '%') {
      setLastDisplay(display + op);
      setDisplay(eval(display + '/100'));
    }
    else if (display !== '') {
      setLastDisplay(display + op);
      setDisplay('');
    }
  }

  function compute() {
    const output = lastDisplay + display;
    setLastDisplay(output);
    setDisplay(eval(output.replace('x', '*').replace('÷', '/').replace('%', '/100')));
  }

  function clean() {
    setLastDisplay('');
    setDisplay('');
  }

  return (
    <div className="calculator">
      <div className="screen">
        <div className="lastDisplay">{lastDisplay}</div>
        <div className="display">{display}</div>
      </div>
      <button className="clear" onClick={() => clean()}>AC</button>
      <button className="delete" onClick={() => setDisplay(display.slice(0, -1))}>DEL</button>
      <button className="operator" onClick={() => { operator('%') }}>%</button>
      <button className="operator" onClick={() => operator('÷')}>÷</button>
      <button className="number" onClick={() => addNumber('7')}>7</button>
      <button className="number" onClick={() => addNumber('8')}>8</button>
      <button className="number" onClick={() => addNumber('9')}>9</button>
      <button className="operator" onClick={() => operator('x')}>x</button>
      <button className="number" onClick={() => addNumber('4')}>4</button>
      <button className="number" onClick={() => addNumber('5')}>5</button>
      <button className="number" onClick={() => addNumber('6')}>6</button>
      <button className="operator" onClick={() => operator('-')}>-</button>
      <button className="number" onClick={() => addNumber('1')}>1</button>
      <button className="number" onClick={() => addNumber('2')}>2</button>
      <button className="number" onClick={() => addNumber('3')}>3</button>
      <button className="operator" onClick={() => operator('+')}>+</button>
      <button className="number" onClick={() => addNumber('0')}>0</button>
      <button className="number" onClick={() => addNumber('.')}>.</button>
      <button className="equal" onClick={() => compute()}>=</button>
    </div>
  );
};

export default Calculator;