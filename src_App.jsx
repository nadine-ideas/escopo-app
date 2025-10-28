import React, { useState } from 'react';
import Form from './Form';
import Report from './Report';

function App() {
  const [report, setReport] = useState(null);

  function handleFormSubmit(data) {
    setReport(data);
  }

  function handleBack() {
    setReport(null);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Agência - Relatório de Escopos</h1>
      {!report ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Report data={report} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;