// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [variables, setVariables] = useState([]);
  const [creatingVariables, setCreatingVariables] = useState(true);
  const [streak, setStreak] = useState(0);
  const [daysLeft, setDaysLeft] = useState(21);

  const [newVar, setNewVar] = useState({ name: '', type: 'number' });

  const addVariable = () => {
    if (newVar.name.trim()) {
      setVariables([...variables, newVar]);
      setNewVar({ name: '', type: 'number' });
    }
  };

  const handleSubmitVariables = () => {
    if (variables.length > 0) {
      setCreatingVariables(false);
    }
  };

  return (
    <div className="app-container">
      {creatingVariables ? (
        <div className="variable-creation">
          <h2>Crea tus variables personalizadas</h2>
          <input
            type="text"
            placeholder="Nombre de la variable"
            value={newVar.name}
            onChange={(e) => setNewVar({ ...newVar, name: e.target.value })}
          />
          <select
            value={newVar.type}
            onChange={(e) => setNewVar({ ...newVar, type: e.target.value })}
          >
            <option value="number">Número</option>
            <option value="boolean">Sí o No</option>
            <option value="type">Tipo (categoría)</option>
          </select>
          <button onClick={addVariable}>Añadir variable</button>
          <button onClick={handleSubmitVariables}>Guardar y continuar</button>
          <ul>
            {variables.map((v, index) => (
              <li key={index}>{v.name} ({v.type})</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="variable-tracker">
          <div className="header">
            <div className="streak">🔥 Racha: {streak} días</div>
            <div className="days-left">⏳ Días restantes: {daysLeft}</div>
          </div>
          <div className="questions">
            <h2>Responde tus variables de hoy</h2>
            {variables.map((v, index) => (
              <div key={index} className="question">
                <label>{v.name}</label>
                {v.type === 'number' && <input type="number" />}
                {v.type === 'boolean' && (
                  <select>
                    <option value="">Selecciona</option>
                    <option value="sí">Sí</option>
                    <option value="no">No</option>
                  </select>
                )}
                {v.type === 'type' && <input type="text" placeholder="Escribe tu tipo" />}
              </div>
            ))}
            <button className="submit">Enviar respuestas</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
