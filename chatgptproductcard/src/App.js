import logo from './logo.svg';
import './App.css';
import Productcard from './components/Productcard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Productcard productImage ='https://picsum.photos/id/237/200/300' productPrice='$10' productName='test'/>
      </header>
    </div>
  );
}

export default App;
