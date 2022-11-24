import './App.css';
import Heading from './components/Heading.js'
import Numberbuilder from './components/Numberbuilder.js'
import Numbergrid from './components/Numbergrid';

function App() {
  return (
    <div className="App">
        <Heading />
        <Numbergrid />
  </div>
  );
}

export default App;


/*
LOGIC:

1. To build and display the number
2. Select mathematical operator
3. Reset display
4. Build second number
5. EQUALS -math operation
6. Display output

*/