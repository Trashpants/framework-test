import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('total starts at zero', () => {
  render(<App />);

  expect(screen.getByTestId('total')).toHaveTextContent('0');
});

describe("Light Bulb", () => {
  it('one light bulb is £3.11', () => {
    render(<App />);

    const lbButton = screen.getByText('Light Bulb');
    fireEvent.click(lbButton);

    expect(screen.getByTestId('total')).toHaveTextContent('3.11');
  });

  it('two light bulbs are £3.11', () => {
    render(<App />);
    const lbButton = screen.getByText('Light Bulb');
    fireEvent.click(lbButton);
    fireEvent.click(lbButton);

    expect(screen.getByTestId('total')).toHaveTextContent('3.11');
  });
})

describe("Chess Set", () => {
  it('one chess set is £5.00', () => {
    render(<App />);

    const csButton = screen.getByText('Chess Set');
    fireEvent.click(csButton);

    expect(screen.getByTestId('total')).toHaveTextContent('5.00');
  });

  it('three chess sets are £13.50', () => {
    render(<App />);
    const csButton = screen.getByText('Chess Set');
    fireEvent.click(csButton);
    fireEvent.click(csButton);
    fireEvent.click(csButton);

    expect(screen.getByTestId('total')).toHaveTextContent('13.50');
  });
})

describe("House Plant", () => {
  it('one house plant is £11.23', () => {
    render(<App />);

    const hpButton = screen.getByText('House Plant');
    fireEvent.click(hpButton);

    expect(screen.getByTestId('total')).toHaveTextContent('11.23');
  });
});

describe("Multiple product tests", () => {

  it('3x Chess sets + 1x Light Bulb', () => {
    render(<App />);
    const lbButton = screen.getByText('Light Bulb');
    const csButton = screen.getByText('Chess Set');
    fireEvent.click(csButton);
    fireEvent.click(csButton);
    fireEvent.click(lbButton);
    fireEvent.click(csButton);

    expect(screen.getByTestId('total')).toHaveTextContent('16.61');
  });

  it('3x Light Bulbs + 1x Chess Set + 1x House plant', () => {
    render(<App />);
    const lbButton = screen.getByText('Light Bulb');
    const csButton = screen.getByText('Chess Set');
    const hpButton = screen.getByText('House Plant');
    fireEvent.click(lbButton);
    fireEvent.click(lbButton);
    fireEvent.click(lbButton);
    fireEvent.click(csButton);
    fireEvent.click(hpButton);

    expect(screen.getByTestId('total')).toHaveTextContent('22.45');
  });
});
