export default function Todo(props) {
  
	return (<li className="todoitem" key={props.index}>          
    <p>Titulo: {props.item.todo}<br/>
    Completado: {'' + props.item.completed}
    </p>
    {props.item.completed? null:<button onClick={()=>props.toggle(props.index)}>HECHO</button>}
    <button onClick={()=>props.borrar(props.item)}>BORRAR</button>    
  </li>)
}