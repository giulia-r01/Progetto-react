//file creato per ospitare un nuovo componente React
// l'iniziale del file deve essere maiuscola e con estensione jsx possibilmente

// componente a funzione (il modo più veloce)
// i componenti a funzione sono più semplici e veloci da scrivere
// i componenti a classe sono più complessi da scrivere ma più potenti

// 1 componente a funzione

const WelcomeStudent = function () {
  // per essere un componente React deve RITORNARE del JSX
  return (
    <div>
      <h2>Ciao Studente</h2>
    </div>
  )
}

export default WelcomeStudent
