import { useEffect, useState } from 'react';
import RandomCat from './rcat';
import "./App.css"

function App() {
  const [showChild, setShowChild] = useState(true);
  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={() => setShowChild(prev => !prev)}>Toggle child</button>
      { showChild && <ChildComponent />}
      <RandomCat />
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