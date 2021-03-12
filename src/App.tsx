import './App.css';
import Landing from './components/Landing';
import List from './components/List';
function App() {
  window.localStorage.setItem('logged', 'true');
  const session = window.localStorage.getItem('logged');
  return (
    <div className='App'>{session === 'true' ? <List /> : <Landing />}</div>
  );
}

export default App;
