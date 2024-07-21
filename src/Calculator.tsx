const Calculator = () => {
  return (
    <div className="calculator">
      <div className="display"></div>
      <button className="clear">AC</button>
      <button className="delete">DEL</button>
      <button className="operator">%</button>
      <button className="operator">/</button>
      <button className="number">7</button>
      <button className="number">8</button>
      <button className="number">9</button>
      <button className="operator">*</button>
      <button className="number">4</button>
      <button className="number">5</button>
      <button className="number">6</button>
      <button className="operator">-</button>
      <button className="number">1</button>
      <button className="number">2</button>
      <button className="number">3</button>
      <button className="operator">+</button>
      <button className="number">0</button>
      <button className="number">.</button>
      <button className="equal">EXE</button>
    </div>
  );
};

export default Calculator;