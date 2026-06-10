import React from 'react';

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = React.useState<number>(initialValue);

  return (
    <div className="counter">
      <h2>Contador</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>Sobre a Natlou</h1>
      <Counter initialValue={0} />
    </div>
  );
}
