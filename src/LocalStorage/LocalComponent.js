import useLocalStorage from './useLocalStorage'

const LocalComponent = () => {

    const[name , setName] = useLocalStorage('Name','')

    return(
        <div className = 'local'>
        <h3 className = 'monospace'>useLocalStorage Custom Hook</h3>
        <input type='text' value={name} onChange={e => setName(e.target.value)}>
        </input>
        
        </div>
    )
}

export default LocalComponent