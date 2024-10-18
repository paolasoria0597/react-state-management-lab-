import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0); // Fixed typo

  const [zombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )
    

  // Helper function to calculate total strength
  const calculateTotalStrength = (team) => {
    return team.reduce((total, fighter) => total + fighter.strength, 0);
  };

  // Helper function to calculate total agility
  const calculateTotalAgility = (team) => {
    return team.reduce((total, fighter) => total + fighter.agility, 0);
  };

  // Effect to recalculate total strength and agility whenever the team changes
  useEffect(() => {
    setTotalStrength(calculateTotalStrength(team));
    setTotalAgility(calculateTotalAgility(team));
  }, [team]);

  // Handle adding a fighter to the team
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]); // Add fighter to the team
      setMoney(money - fighter.price); // Deduct money
    } else {
      console.log('Not enough money'); // Log message if money is insufficient
    }
  };

  // Handle removing a fighter from the team
  const handleRemoveFighter = (index) => {
    const removedFighter = team[index]; // Identify the fighter to remove
    setTeam(team.filter((_, i) => i !== index)); // Remove fighter from the team
    setMoney(money + removedFighter.price); // Refund the price of the removed fighter
  };

  return (
    <div className="app">
      <h1>Zombie Fighters</h1>
      <p>Money: ${money}</p>
      <p>Total Team Strength: {totalStrength}</p>
      <p>Total Team Agility: {totalAgility}</p>

   
      <ul className="fighters-list">
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      <ul className="team-list">
        {team.map((member, index) => (
          <li key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h2>{member.name}</h2>
            <p>Strength: {member.strength}</p>
            <p>Agility: {member.agility}</p>
            <button onClick={() => handleRemoveFighter(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
  


