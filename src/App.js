import Film from './Film';
import './App.css';
import demon from './img/demon.png';
import elli from './img/elli.png';
const Filmy = [
  {id:1, tytul:"Demon który przychodzi o w ciemnościach nocy", opis:"Horror", grafika:demon,
    typ:["Premiera","18+"],godzina:["18:00","21:00"]
  },
  {id:2, tytul:"Elli", opis:"rodzinny/fantastyka", grafika:elli,
    typ:["Premiera","Rodzinny"],godzina:["12:00","14:30", "17:00"]
  },
];

function App() {
  return (
    <div className="App">
      <h1>Kino</h1>
      <Film film={Filmy[0]}/>
      <Film film={Filmy[1]}/>
    </div>
  );
}

export default App;
