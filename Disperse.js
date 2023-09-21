import React, { Component } from 'react';

class Disperse extends Component {
  onSubmit = (input) => {
    const lines = input.split('\n');
    let error = '';

    for (let i = 0; i < lines.length; i++) {
      const parts = lines[i].split(' ');

      if (parts.length !== 4) {
        error = `Line ${i + 1} has an incorrect format. It should be 'Address Amount'.`;
        break;
      }

      const address = parts[1];
      const amount = parts[2];

      if (!address.match(/^0x[0-9a-fA-F]{40}$/)) {
        error = `Invalid address in line ${i + 1}.`;
        break;
      }

      if (!Number.isInteger(parseInt(amount, 10)) || parseInt(amount, 10) <= 0) {
        error = `Invalid amount in line ${i + 1}.`;
        break;
      }
    }

    if (error) {
      throw new Error(error);
    }
  }

  keepFirstOne = (input) => {
    const lines = input.split('\n');
    const uniqueLines = [];

    for (let i = 0; i < lines.length; i++) {
      if (!uniqueLines.some(line => line.split(' ')[1] === lines[i].split(' ')[1])) {
        uniqueLines.push(lines[i]);
      }
    }

    return uniqueLines.join('\n');
  }

  combineBalances = (input) => {
    const lines = input.split('\n');
    const balances = {};

    for (let i = 0; i < lines.length; i++) {
      const parts = lines[i].split(' ');
      const address = parts[1];
      const amount = parseInt(parts[2], 10);

      if (balances[address]) {
        balances[address] += amount;
      } else {
        balances[address] = amount;
      }
    }

    const combinedLines = Object.keys(balances).map(address => `${address} ${balances[address]}`);
    return combinedLines.join('\n');
  }

  render() {
    return (
      <div>
        <h1>Disperse Component</h1>
      </div>
    );
  }
}

export default Disperse;
