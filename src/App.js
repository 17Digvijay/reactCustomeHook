
import ToggleComponent from './Toggle/ToggleComponent'
import UpdateComponent from './Updateuse/UpdateComponent'
import ArrayComponent from './ArrayUpdate/ArrayComponent'
import LocalComponent from './LocalStorage/LocalComponent'
import TimeOutComponent from './TimeOut/TimeOutComponent'
import Component from './Debounce/Component'


import './App.css';

function App() {
  return (
    <div className="App">
      <div className = 'toggle'>
      <ToggleComponent/>
      </div>
       <hr class="style1"></hr>
      <div className = 'update'>
      <UpdateComponent/>
        </div>
        <hr class="style1"></hr>
      <div className = 'update'>
      <ArrayComponent/>
        </div>
        <hr class="style1"></hr>
      <div className = 'local'>
      <LocalComponent/>
        </div>

        <hr class="style1"></hr>
        <div className = 'timeout'>
      <TimeOutComponent/>
        </div>

        <hr class="style1"></hr>
        <div className = 'timeout'>
      <Component/>
        </div>


    </div>

    
  );
}

export default App;
