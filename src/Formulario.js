import { useState } from "react"

export default function Formulario(props) {
  const [texto, setTexto] = useState("");
  const [completado, setCompletado] = useState(false);

	return (<div>
			Título 
			<input  type="text" id="todo" placeholder="Añade un texto" value={texto} onChange={e=>setTexto(e.target.value.toUpperCase())}></input>
      Completado 
      <select id="selector" onChange={e=>setCompletado(e.target.value)}>        
        <option value={false}>NO</option>
        <option value={true}>SI</option>
      </select>
      <button onClick={()=>props.crear(texto, completado)}>AÑADIR</button>  
  </div>)
}