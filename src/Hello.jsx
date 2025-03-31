// componente creato come CLASSE

import { Component } from "react"
// questo component è il principale componente a classe definito nella libreria di React
// tutti i miei componenti a classe devono derivare da lui

class Hello extends Component {
  // l'unica cosa che manca è un METODO OBBLIGATORIO nei componenti a classe, che si chiama 'render()'
  render() {
    return <p>Io sono un componente a classe!</p>
  }
}

export default Hello
