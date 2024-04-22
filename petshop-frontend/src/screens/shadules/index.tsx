import React, { useState } from 'react';
import api from '../../services/Api';
import './index.css'; 

export const Agendamentos = () => {
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [quantidadeCachorrosGrandes, setQuantidadeCachorrosGrandes] = useState('');
  const [quantidadeCachorrosPequenos, setQuantidadeCachorrosPequenos] = useState('');
  const [petshop, setPetshop] = useState<PetshopData | null>(null);
  
  interface PetshopData {
    name: string;
    distance: number;
    finalPrice: number;
  }

  const formatarValor = (valor: number): string => {
    const valorEmReais = valor / 100; 
    return valorEmReais.toFixed(2).replace('.', ','); 
  };


  const formatarDistancia = (distancia: number): string => {
    if (distancia >= 1000) {
      return (distancia / 1000).toFixed(1) + 'km';
    } else {
      return distancia.toFixed(0) + 'm';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const [ano, mes, dia] = data.split('-');
      const formattedDate = `${dia}/${mes}/${ano}`;

      const params = {
        date: formattedDate,
        small_dogs: quantidadeCachorrosPequenos,
        big_dogs: quantidadeCachorrosGrandes
      };

      const response = await api.get('/cheapest-petshop', { params });

      setPetshop(response.data);

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
    }
  };

  return (
    <div className='container'>
      <div className="form-container">
        <h1 className='titlePet'>Selecione os campos abaixo para encontrar o <span className='bestPet'>melhor pet shop!</span></h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="servico">Serviço:</label>
            <select className='service_pet' id="servico" value={servico} onChange={(e) => setServico(e.target.value)}>
              <option value="">Selecione o serviço</option>
              <option value="Banho e Tosa">Banho e Tosa</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="data">Data:</label>
            <input className='input' type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="quantidadeCachorrosGrandes">Quantidade de Cachorros Grandes:</label>
            <select className='input' id="quantidadeCachorrosGrandes" value={quantidadeCachorrosGrandes} onChange={(e) => setQuantidadeCachorrosGrandes(e.target.value)}>
              <option value="">Selecione a quantidade</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantidadeCachorrosPequenos">Quantidade de Cachorros Pequenos:</label>
            <select className='input' id="quantidadeCachorrosPequenos" value={quantidadeCachorrosPequenos} onChange={(e) => setQuantidadeCachorrosPequenos(e.target.value)}>
              <option value="">Selecione a quantidade</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className='button_submit' type="submit">Buscar</button>
        </form>
        {petshop && (
          <div className="petshop-details">
            <h3>Detalhes do Petshop:</h3>
            <p>Nome: {petshop.name}</p>
            <p>Distância:{formatarDistancia(petshop.distance)}</p>
            <p>Preço: R$ {formatarValor(petshop.finalPrice)}</p>
          </div>
        )}
      </div>
    </div>
  );
};
