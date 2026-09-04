import './App.css';

function Mybutton(){
   return( <button>Click Me</button>);
  }

function ListTable(){
  return (
  <>
    <div className="list">
      this is my list
      <SearchBar />
      </div>
    
    </>
  );
}

function SearchBar(){
  return (
  <input type='text' placeholder='Search'/>
 );
}

export default function List(){
  
  return (
    <>
    <h1>This is my list</h1>
    <Mybutton />
    <ListTable />
    </>
  );
}