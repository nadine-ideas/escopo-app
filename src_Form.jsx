import React, { useState } from 'react';

const clientes = [
  'Cliente X',
  'Cliente Y',
  'Cliente Z'
];

export default function Form({ onSubmit }) {
  const [form, setForm] = useState({
    cliente: clientes[0],
    midiaPaga: '',
    conteudo: '',
    social: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto'
      }}
    >
      <label>
        Cliente:
        <select name="cliente" value={form.cliente} onChange={handleChange}>
          {clientes.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
      </label>

      <label>
        Mídia Paga (R$):
        <input
          name="midiaPaga"
          type="number"
          value={form.midiaPaga}
          onChange={handleChange}
          min="0"
          step="0.01"
          placeholder="Valor consumido"
          required
        />
      </label>

      <label>
        Conteúdo (artigos publicados):
        <input
          name="conteudo"
          type="number"
          value={form.conteudo}
          onChange={handleChange}
          min="0"
          placeholder="Número de artigos"
          required
        />
      </label>

      <label>
        Social (posts publicados):
        <input
          name="social"
          type="number"
          value={form.social}
          onChange={handleChange}
          min="0"
          placeholder="Número de posts"
          required
        />
      </label>

      <button type="submit">Gerar Relatório</button>
    </form>
  );
}