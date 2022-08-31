import { useState } from 'react';
import './App.css';
import {MyComponent} from './components/MyComponent';
import { TrainerForm } from "./components/TrainerForm"



function App() {

const [name, setName] = useState('test')

  return (
    <TrainerForm></TrainerForm>
  );
}

export default App;
