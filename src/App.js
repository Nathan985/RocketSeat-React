import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Main from './pages/main/'
import Routes from './routes'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Routes />
    </div>
  );
}

export default App;
