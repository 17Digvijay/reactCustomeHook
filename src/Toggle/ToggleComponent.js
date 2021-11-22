import  './toggleStyle.css'
import useToggle from './useToggle'

const ToggleComponent = () => {

    const[value , toggleValue] = useToggle(true)

    return(
        <div className = 'Toggle'>
        <h3 className = 'monospace'>useToggle Custom Hook</h3>
        <h3 className = 'fantasy' >{value.toString().toUpperCase()}</h3>
        <button class="btn btn-light" onClick = {toggleValue}>Toggle</button>
        <button  class="btn btn-success" onClick = {() => toggleValue(true)} >Make True</button>
        <button class="btn btn-danger" onClick = {() => toggleValue(false)} >Make False</button>
        </div>
    )
}

export default ToggleComponent