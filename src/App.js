import Counter from "./components/Counter"
import { useDispatch } from "react-redux"
import { INCREMENT , DECREMENT } from "./constants"

const App = () =>{
const dispatch = useDispatch()

return(
<div style={{textAlign:"center"}}>
  
  <h1>Welcome to React</h1>
  <button onClick={(e)=> dispatch({type:INCREMENT})}>Increment  +</button>

<Counter/>

<button  onClick={(e)=> dispatch({type:DECREMENT})}>  Decrement -</button>
</div>
)
}
export default App