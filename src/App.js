import './App.css';
import Navbar from './components/Navbar';
import YoutubeVedio from './components/YoutubeVedio';
import Work from './components/Work';
import Advantages from './components/Advantages';
import First from './components/First';
import Six from './components/Six';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <First/>
      <Advantages/>
      <YoutubeVedio />
     <Work/>
      <Six/>
    </div>
  );
}

export default App;
