import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import WelcomeStudent from "./WelcomeStudent"
import Hello from "./Hello"
import LinkComponent from "./LinkComponent"
function App() {
  return (
    <>
      <header>
        <LinkComponent text="EPICODE" link="https://epicode.com" />
        <LinkComponent text="GOOGLE" link="https://google.com" />
        <LinkComponent text="MDM" link="https://developer.mozzilla.org.com" />
      </header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <WelcomeStudent />
      <h1>CIAO EPICODE</h1>
      <WelcomeStudent />
      <Hello />
    </>
  )
}

export default App
