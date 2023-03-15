import './App.css';
import React, { useState, useEffect } from 'react';
import Product from './components/Product';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);


  function incrementCounter() {
    setCounter(prevCounter => prevCounter + 1);
  }

  function decrementCounter() {
    setCounter(prevCounter => prevCounter - 1);
  }
  function clearData() {
    setData([]);
  }

  function fetchData() {
    // MAke API call using axious or fetch() here we use fetch
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Set data state variable
        setData(data);
        // Reset counter
        setCounter(0);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    if (counter === 5){
      fetchData();
    }
  }, [counter]);
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-2xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xl font-medium">Counter: {counter}</p>
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                onClick={incrementCounter}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                onClick={decrementCounter}
              >
                Decrement
              </button>
              <button
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-red-500"
                onClick={clearData}
              >
                Clear Data
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.length > 0 &&
              data.map(product => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
