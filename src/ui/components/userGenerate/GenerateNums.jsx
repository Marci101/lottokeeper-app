import { useState } from 'react';

export default function GenerateNums() {
  const [userNumbers, setUserNumbers] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserNumbers({...userNumbers, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const numbers = Object.values(userNumbers);
    numbers.forEach((num) => {
      if(isNaN(parseInt(num))) {
        alert('Please, enter five numbers! Choose from 1 to 39!');
      }
    })
    console.log('userNumbers:', userNumbers);
  }

  return (
    <section id="generate-nums">
      <form onSubmit={handleSubmit}>
        <input type="number" name="bet1" value={userNumbers.bet1 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet2" value={userNumbers.bet2 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet3" value={userNumbers.bet3 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet4" value={userNumbers.bet4 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet5" value={userNumbers.bet5 || ""} onChange={handleChange} min="1" max="39" required></input>
        <button type="submit">My bet!</button>
      </form>
    </section>
  );
}