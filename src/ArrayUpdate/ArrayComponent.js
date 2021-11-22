import useArray from "./useArray"

const ArrayComponent = () => 
 {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div className = 'array'>
      <h3 className = 'monospace'>UseArray Custom  Hook</h3>
      <div>
          <h3>{'Array : ' + array.join(", ")}</h3></div>
      <button class="btn btn-primary" onClick={() => push(7)}>Add 7</button>
      <button class="btn btn-primary" onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button class="btn btn-danger" onClick={() => remove(1)}>Remove Second Element</button>
      <button class="btn btn-warning" onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button class="btn btn-primary" onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button class="btn btn-danger" onClick={clear}>Clear</button>
    </div>
  )
}

export default ArrayComponent;