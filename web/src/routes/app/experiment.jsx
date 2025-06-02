import { useState } from 'react'

/**
 * @typedef {{ id: number, nombre: string, tipo: 'entrada' | 'salida' }} Variable
 */

function Experiment() {
  const [variables, setVariables] = useState([
		{id:"2020", nombre: "Ducha de agua fría", tipo: "boolean", posicion: "entrada"},
		{id:"2021", nombre: "Felicidad", tipo: "number", posicion: "salida"}
	])
  const [nombre, setNombre] = useState('')
	const [tipo, setTipo] = useState('boolean')
  const [posicion, setPosicion] = useState('entrada')
  const [showConfirm, setShowConfirm] = useState(false)

  const addVariable = () => {
    if (!nombre.trim()) return
    const nueva = {
      id: Date.now(),
      nombre: nombre.trim(),
      tipo,
			posicion,
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
    <div>
      <h1 className='center'>Tu experimento</h1>

			<div className='experimentDiagram'>
				<div className='entrada'>
					<h3>Entrada</h3>
					{variables.map((v) => v.posicion == "entrada" && (
						<div key={v.id}>
							[{v.tipo}] {v.nombre}{' '}
							<button onClick={() => deleteVariable(v.id)}>🗑️ Eliminar</button>
						</div>
					))}
				</div>
				<div className='salida'>	
					<h3>Salida</h3>
					{variables.map((v) => v.posicion == "salida" && (
						<div key={v.id}>
							[{v.tipo}] {v.nombre}{' '}
							<button onClick={() => deleteVariable(v.id)}>🗑️ Eliminar</button>
						</div>
					))}
				</div>
			</div>



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
				<select value={posicion} onChange={(e) => setTipo(e.target.value)}>
          <option value="boolean">Sí o No</option>
          <option value="int">Número</option>
        </select>

        <button onClick={addVariable}>Añadir</button>
      </div>

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
