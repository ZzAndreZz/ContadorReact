import React, { Component } from 'react';
import Contador from "./componentes/Contador"
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/global.css';

class App extends Component {
  render() {
    return <Contador />
  }
}
export default App;