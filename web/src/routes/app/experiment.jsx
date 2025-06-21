import { useEffect, useState } from 'react'
import Icon from '../../components/icon'

/**
 * @typedef {{ id: number, nombre: string, tipo: 'entrada' | 'salida' }} Variable
 */

function Experiment() {
  const [variables, setVariables] = useState([
		{id:"2020", nombre: "Ducha de agua fría", tipo: "boolean", posicion: "entrada"},
		{id:"2021", nombre: "Horas de sueño", tipo: "number", posicion: "entrada"},
		{id:"2022", nombre: "Felicidad", tipo: "number", posicion: "salida"}
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

	useEffect(() => console.log(variables.length), [variables])

  return (
    <div>
      <h2 className='center'>Tu experimento</h2>

			<div className='experimentDiagram'>
				<div className='card'>
					<h3>Entrada</h3>
					{variables.filter(v => v.posicion == "entrada").length != 0 &&
						<div className='wrapper'>
							{variables.map((v) => v.posicion == "entrada" && (
								<>
									<div className="container" key={v.id}>
										<div className={`tag ${v.tipo == 'boolean' ? 'green' : 'pink'}`}>{v.tipo}</div>
										<div className='text'>{v.nombre}{' '}</div>
										<button onClick={() => deleteVariable(v.id)}>-</button>
									</div>
								</>
							))}
						</div>
					}
				</div>
				<Icon name="arrow-right-outline" className={"icon"}/>
				<div className='card'>
					<h3>Salida</h3>
					{variables.filter(v => v.posicion == "salida").length != 0 &&
						<div className='wrapper'>
							{variables.map((v) => v.posicion == "salida" && (
								<>
									<div className="container" key={v.id}>
										<div className={`tag ${v.tipo == 'boolean' ? 'green' : 'pink'}`}>{v.tipo}</div>
										<div className='text'>{v.nombre}{' '}</div>
										<button onClick={() => deleteVariable(v.id)}>-</button>
									</div>
								</>
							))}
						</div>
					}
				</div>
			</div>

      <div className='form'>
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
