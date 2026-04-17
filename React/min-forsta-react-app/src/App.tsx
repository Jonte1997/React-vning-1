import {useEffect } from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

function App() {
  useEffect (() => {
    console.log("Appen har laddats");
  }, []);

  return (
    <div>
      <h1>Min första React-app</h1>

      <UserCard
      name="Jonathan Bengtsson"
      age={25}
      email="Jonte@gmail.com"
      />

      <Counter />
    </div>
  );
}

export default App;

