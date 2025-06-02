import { useState } from 'react'


export default function RegisterData() {
  const [nombre, setNombre] = useState('')
  const [valor, setValor] = useState('')
  const [historial, setHistorial] = useState([])

  const registrar = () => {
    if (!nombre.trim() || !valor.trim()) return
    const nuevo = {
      id: Date.now(),
      nombre: nombre.trim(),
      valor: valor.trim(),
      fecha: new Date().toLocaleString(),
    }
    setHistorial([nuevo, ...historial])
    setNombre('')
    setValor('')
  }

  return (
    <div className="page">
      <h2>📝 Registro de datos</h2>

      <input
        type="text"
        placeholder="Nombre de la variable"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={registrar}>Registrar</button>

      <h3>Historial:</h3>
      <ul>
        {historial.map((r) => (
          <li key={r.id}>
            {r.fecha} - {r.nombre}: {r.valor}
          </li>
        ))}
      </ul>
    </div>
  )
}
//           <h2>📊 Seguimiento de variables</h2>