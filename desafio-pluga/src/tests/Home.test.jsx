import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import api from '../services/API';
import Home from '../pages/Home';
import ResponseMock from './mock/ResponseMock';
import renderWithRouter from './renderWithRouter';

jest.mock('axios');

describe('#Page Home', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: ResponseMock });
  });

  it('Testa se a requisição para API é feita', async () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();

    const response = await api();
    expect(response).toEqual({ data: ResponseMock });
  });

  it('Testa se a requisição está aparecendo com o data-testId', async () => {
    renderWithRouter(<Home />);
    const allCards = await screen.findAllByTestId('card-btn-open');

    expect(allCards[0]).toBeInTheDocument();
    expect(allCards[11]).toBeInTheDocument();
  });

  it('Testa se os botões "voltar" e "proxima" estão funcionando', async () => {
    renderWithRouter(<Home />);
    const backBtn = await screen.findByText(/voltar/i);
    const nextBtn = await screen.findByText(/proxima/i);

    expect(nextBtn).toBeEnabled();

    fireEvent.click(nextBtn);
    expect(backBtn).toBeEnabled();
  });

  it('Testa o botão "fechar" da modal funciona', async () => {
   renderWithRouter(<Home />);
    const allCards = await screen.findAllByTestId('card-btn-open');
    fireEvent.click(allCards[0]);

    const closeBtn = await screen.findByText(/fechar/i);
    expect(closeBtn).toBeInTheDocument();

    fireEvent.click(closeBtn);
    expect(closeBtn).not.toBeInTheDocument();
  });

  it('Testa se aparece na tela o texto "visualizar as últimas ferramentas"', async () => {
    renderWithRouter(<Home />);
     const allCards = await screen.findAllByTestId('card-btn-open');
     fireEvent.click(allCards[0]);
 
     const viewTools = await screen.findByText(/últimas ferramentas visualizadas/i);
     expect(viewTools).toBeInTheDocument();

   });
});
