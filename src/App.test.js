import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react'
import App from './App';

describe('App', () => {
  it('renders App.js', () => {
    render(<App />);

    expect(screen.getByText('Pokedex!')).toBeVisible();

  })
});