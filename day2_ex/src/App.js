import React, { useState, useEffect } from 'react';
import './App.css';
import List from './ListDemo';


function App() {
  //Start of exercise 1
  function Counter(props) {
    const [count, setCount] = useState(props.init);

    useEffect(() => {
      const storedCount = localStorage.getItem("count");
      setCount(parseInt(storedCount))
    }, []);


    useEffect(() => {
      localStorage.setItem("count", count);
    }, [count]);

    return (
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + props.increment)}>+</button>
        <button onClick={() => setCount(count - props.increment)}>-</button>
      </div>
    )
  };

  //Start of exercise 2

  //Start of chuck part in exercise 2
  function Chuck() {
    const [chuckJoke, setChuckJoke] = useState("Chuck Joke");

    function getChuck() {
      const URLChuck = "https://api.chucknorris.io/jokes/random";

      fetch(URLChuck)
        .then(res => res.json())
        .then(data => {
          setChuckJoke(data.value)
        })
    };

    return (
      <div>
        <button onClick={() => getChuck()}>Get Chuck Norris Joke</button>
        <p>{chuckJoke}</p>
      </div>
    )
  };

  //Start of dad part in exercise 2
  function Dad() {
    const [dadJoke, setDadJoke] = useState("Dad Joke");

    function getDadJoke() {
      const URLDad = "https://icanhazdadjoke.com/";

      fetch(URLDad, { headers: { 'Accept': 'application/json' } })
        .then(res => res.json())
        .then(data => {
          setDadJoke(data.joke)
        })
    };

    useEffect(() => {
      const interval = setInterval(() => {
        getDadJoke()
      }, 10000)
      return () => {
        clearInterval(interval)
      }
    }, []);

    return (
      <div>
        <p>{dadJoke}</p>
      </div>
    )
  };

  //Return for the App
  return (
    <div className="App">
      <Counter init={15} increment={5} />
      <br />
      <Chuck />
      <Dad />
      <br />
      <List />
    </div>
  );
}

export default App;
