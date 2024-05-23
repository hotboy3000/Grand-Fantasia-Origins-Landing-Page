import Start from './components/start';
import Login from './components/login';
import { Route } from 'wouter';
import './App.css';

function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-green'>
      <Route path='/' component={Start} />
      <Route path='/login' component={Login} />
    </main>
  );
}

export default App;
