import './App.css';
import { Footer } from './components/Footer';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <Footer />
    </div>
  );
}

export default App;