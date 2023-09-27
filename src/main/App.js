import './App.css';
import Context from '../context/context';
import Head from '../components/head/head';
import Sidebar from '../components/sidebar/sidebar';
import Newswire from '../components/newswire/newswire';
import Games from '../components/games/games';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="App">
      <Context>
        <Sidebar/>
        <Head/>
        <Newswire/>
        <Games/>
        <Footer/>
      </Context>
    </div>
  );
}

export default App;
