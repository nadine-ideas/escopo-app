import React from 'react';

export default function Report({ data, onBack }) {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
      <h2>Relatório do Cliente</h2>
      <p><strong>Cliente:</strong> {data.cliente}</p>
      <p><strong>Mídia Paga:</strong> R$ {Number(data.midiaPaga).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      <p><strong>Conteúdo:</strong> {data.conteudo} artigos publicados</p>
      <p><strong>Social:</strong> {data.social} posts publicados</p>
      <button onClick={onBack}>Voltar</button>
    </div>
  );
}