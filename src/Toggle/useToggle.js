import {useState} from 'react'

const useToggle = (defaultValue) => {

    const[value,setVale] = useState(defaultValue)

    const toggleValue = (value) =>
    {
        setVale(currentValue => typeof value === 'boolean' ? value : !currentValue )
    }

    return[value,toggleValue]
}

export default useToggle;