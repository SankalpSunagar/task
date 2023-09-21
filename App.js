import React from 'react';
import Disperse from './Disperse';

function App() {
  const input = `
    0x1234 100 1234 200
    0x5678 300 5678 400
    0x1234 500 1234 600
  `;

  const handleSubmit = () => {
    try {
      Disperse.onSubmit(input);
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  const uniqueLines = Disperse.keepFirstOne(input);

  const combinedBalances = Disperse.combineBalances(input);

  return (
    <div className="App">
      <h1>Disperse App</h1>
      <button onClick={handleSubmit}>Submit Form</button>
      <h2>Unique Lines</h2>
      <pre>{uniqueLines}</pre>
      <h2>Combined Balances</h2>
      <pre>{combinedBalances}</pre>
    </div>
  );
}

export default App;
