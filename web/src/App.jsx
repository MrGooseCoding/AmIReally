import React, { useState } from 'react';
import './styles/styles.css';

import Modal from './components/modal';

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
    <div>
      <Modal>
        {creatingVariables ? (
        <div className={`variable-creation ${variables.length != 0 ? "gap": ""}`}>
          <div className='variable-setter'>
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
            </select>
            <button onClick={addVariable}>Añadir variable</button>
            <button onClick={handleSubmitVariables}>Guardar y continuar</button>
          </div>
          <div className="set-variables">
            {variables.map((v, index) => (
              <div key={index} className='variable'>{v.name} ({v.type})</div>
            ))}
          </div>
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
              </div>
            ))}
            <button className="submit">Enviar respuestas</button>
          </div>
        </div>
      )}
      </Modal> 
    </div>
  );
}

export default App;
