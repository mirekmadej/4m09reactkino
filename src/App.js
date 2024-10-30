import Film from './Film';
import Film2 from './Film2';
import './App.css';
import demon from './img/demon.png';
import elli from './img/elli.png';
const filmy = [
  {id:1, tytul:"Demon który przychodzi o w ciemnościach nocy", opis:"Horror", grafika:demon,
    typ:["Premiera","Dorośli"],godzina:["12:00","18:00","21:00"]
  },
  {id:2, tytul:"Elli", opis:"rodzinny/fantastyka", grafika:elli,
    typ:["Premiera","Rodzinny"],godzina:["12:00","14:30", "17:00"]
  },
];

function App() {
  return (
    <div className="App">
      <h1>Kino</h1>
        {filmy.map((e) => <Film key={e.id} film={e} />)}
        <Film2 film={filmy[0]} />
    </div>
  );
}
//

export default App;
