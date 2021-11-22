import '../App.css'
import {useState} from 'react'
import useUpdate from './useUpdate'

const UpdateComponent = () => {

    const [count, setCount] = useState(10)
    useUpdate(() => alert(count),[count])

    return(
        <div>

            <h3 className = 'monospace'>UseUpdate Custom  Hook</h3>
            
            <h1>{count}</h1>

            <button  class="btn btn-success" onClick = {() => setCount(c => c + 1 )}>Increment</button>
        
        </div>
    )
}

export default UpdateComponent