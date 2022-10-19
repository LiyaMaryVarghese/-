
import { useState, useEffect } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render');
  const [searchFiled, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').
      then((response) => response.json()).
      then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filterMonster = monsters.filter((x) => {
      return x.name.includes(searchFiled);
    });
    setFilteredMonster(filterMonster);

  }, [monsters, searchFiled]);

  const onSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchField(searchText);
  }



  return (
    <div className="App">

      <SearchBox className="Search-Box" placeHolder="Search Box" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFiled: ''
//     };
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users').
//       then((response) => response.json()).
//       then((users) => this.setState(() => {
//         return { monsters: users }
//       }, () => {
//         console.log(this.state);
//       }));
//   }
//   onSearchChange =  (event) => {

//       const searchText = event.target.value;


//       this.setState(() => {
//         return { searchFiled: searchText }
//       }, () => {
//         console.log({ endingArray: this.state });
//       });
//     }


//   render() {
//     const{monsters,searchFiled}=this.state;
//     const{onSearchChange}=this;
//     const filterMonster = monsters.filter((x) => {
//       return x.name.includes(searchFiled);
//     });

//     console.log('render from App');
//     return (
//       <div className="App">
//         {/* <input className='search-box' type='search' placeholder='search monster' onChange={onSearchChange}/> */}

//         <SearchBox className="Search-Box" placeHolder="Search Box" onChangeHandler={onSearchChange}/>
//         <CardList monsters= {filterMonster} />
//       </div>
//     );
//   }
// }

export default App;
