import {useEffect,useRef} from 'react'
const useUpdate = (callback,dependency) => {

    const firstRender = useRef(true)
    useEffect(
        () => {
            if(firstRender.current)
            {
                firstRender.current=false
                return
            }

        return callback()

        },dependency
    )

        
}

export default useUpdate;