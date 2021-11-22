import { useState } from "react"
import useDebounce from "./useDebounce"

export default function Component() {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
        <h3 className = 'monospace'>useDebounce Custom Hook</h3>
      <div><h1>{count}</h1></div>
      <button  class="btn btn-success" onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}