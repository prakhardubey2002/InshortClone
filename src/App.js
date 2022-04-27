
import './App.css';
import Navinshorts from './components/Navinshorts';
import { useState } from 'react';
function App() {
  const [category,setCategory]=useState("general")
  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}/>
    </div>
  );
}

export default App;
