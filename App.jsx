import { useEffect } from 'react';
import "./App.css"

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <ChildComponent />
    </>
  )
}

function ChildComponent() {
  useEffect(() => {
    console.log("Child mounted");

    return () => {
      console.log("Child unmounted");
    }
  }, []);
  return <div>I am the child!</div>
}

export default App;