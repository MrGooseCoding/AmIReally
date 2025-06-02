import { useState } from 'react'

/**
 * @typedef {{ id: number, nombre: string, tipo: 'entrada' | 'salida' }} Variable
 */

function Experiment() {
  const [variables, setVariables] = useState([])
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('entrada')
  const [showConfirm, setShowConfirm] = useState(false)

  const addVariable = () => {
    if (!nombre.trim()) return
    const nueva = {
      id: Date.now(),
      nombre: nombre.trim(),
      tipo,
    }
    setVariables([...variables, nueva])
    setNombre('')
  }

  const deleteVariable = (id) => {
    setVariables(variables.filter((v) => v.id !== id))
  }

  const guardarCambios = () => {
    setShowConfirm(true)
  }

  const confirmarGuardado = () => {
    setShowConfirm(false)
    alert('Configuración guardada. Recuerda repetir el experimento.')
  }

  return (
    <div className="page">
      <h2>⚙️ Configuración del experimento</h2>

      <div>
        <input
          type="text"
          placeholder="Nombre de la variable"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>
        <button onClick={addVariable}>➕ Añadir</button>
      </div>

      <ul>
        {variables.map((v) => (
          <li key={v.id}>
            [{v.tipo}] {v.nombre}{' '}
            <button onClick={() => deleteVariable(v.id)}>🗑️ Eliminar</button>
          </li>
        ))}
      </ul>

      <button onClick={guardarCambios}>💾 Guardar</button>

      {showConfirm && (
        <div className="modal">
          <p>¿Estás seguro de que quieres guardar? Esto reiniciará el experimento.</p>
          <button onClick={confirmarGuardado}>Confirmar</button>
          <button onClick={() => setShowConfirm(false)}>Cancelar</button>
        </div>
      )}
    </div>
  )
}

export default Experiment
