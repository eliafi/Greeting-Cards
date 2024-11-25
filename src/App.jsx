import React from 'react';
import GreetingCard from './components/GreetingCard';
import Header from './components/header';

const App = () => {
  return (
    <div className="text-center">
      <Header />
      <div className="p-4 flex flex-col items-center">
        <GreetingCard title="Happy Birthday!" message="Wishing you a fantastic day filled with joy!" />
        <GreetingCard title="Congratulations!" message="Great job on your achievement!" />
        <GreetingCard title="Thank You!" message="Thanks for your kindness and support!" />
      </div>
    </div>
  );
};

export default App;
