import {useState} from 'react'
import useTimeOut from './useTiemOut'


const TimeOutComponent = () => {

    const [count, setCount] = useState(10);
    const{clear,reset}= useTimeOut( () => setCount(0),2000)

    return(
        <div>
            <h3 className = 'monospace'>useToggle Custom Hook</h3>
       <div>{count}</div>
      <button class="btn btn-success"  onClick={() => setCount(c => c + 1)}>Increment</button>
      <button class="btn btn-light" onClick={clear}>Clear Timeout</button>
      <button class="btn btn-danger"onClick={reset}>Reset Timeout</button>
        </div>
    )

}

export default TimeOutComponent;
