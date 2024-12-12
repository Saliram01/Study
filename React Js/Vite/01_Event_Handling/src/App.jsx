import './App.css'
import Button from './components/Button';

function App() {
  function Handling(e) {
    console.log("onInput Event Handling", e.target.value);
  }

  function Handle() {
    console.log("I am Clicked from button component to app components");
  }

  return (
   <center>
      <h1>Event Handling</h1>
      <br />
      <input type='text' onInput={Handling}/>
      <br />
      <br />
      <Button Handle={Handle}/>
      <br />
      <div onClick={() => console.log("I am inline clicked")} className='inline'>Inline Event</div>
   </center>
  )
}

export default App
