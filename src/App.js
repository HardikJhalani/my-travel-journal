import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import placesData from './data';

function App() {
  const places = placesData.map(item => {
    return <Card 
              key = {item.id}
              {...item}
          />
  })
  return (
    <div className="app">
      <Navbar />
      <div className='cards'>
        {places}
      </div>
    </div>
  );
}

export default App;
