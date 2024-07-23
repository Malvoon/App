import {useState} from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  function calculate() {
    try {
      const output = display.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100*');
      setDisplay(eval(output));
    } catch (error) {
      setDisplay('error');
    }
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <button className="clear" onClick={() => setDisplay('')}>AC</button>
      <button className="delete" onClick={() => setDisplay(display.slice(0, -1))}>DEL</button>
      <button className="operator" onClick={() => setDisplay(display + '%')}>%</button>
      <button className="operator" onClick={() => setDisplay(display + '÷')}>÷</button>
      <button className="number" onClick={() => setDisplay(display + '7')}>7</button>
      <button className="number" onClick={() => setDisplay(display + '8')}>8</button>
      <button className="number" onClick={() => setDisplay(display + '9')}>9</button>
      <button className="operator" onClick={() => setDisplay(display + 'x')}>x</button>
      <button className="number" onClick={() => setDisplay(display + '4')}>4</button>
      <button className="number" onClick={() => setDisplay(display + '5')}>5</button>
      <button className="number" onClick={() => setDisplay(display + '6')}>6</button>
      <button className="operator" onClick={() => setDisplay(display + '-')}>-</button>
      <button className="number" onClick={() => setDisplay(display + '1')}>1</button>
      <button className="number" onClick={() => setDisplay(display + '2')}>2</button>
      <button className="number" onClick={() => setDisplay(display + '3')}>3</button>
      <button className="operator" onClick={() => setDisplay(display + '+')}>+</button>
      <button className="number" onClick={() => setDisplay(display + '0')}>0</button>
      <button className="number" onClick={() => setDisplay(display + '.')}>.</button>
      <button className="equal" onClick={() => calculate()}>=</button>
    </div>
  );
};

export default Calculator;