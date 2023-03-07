import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/NavBar.js'
import Banner from './components/Banner.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
