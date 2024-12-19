import Start from './components/start';
import Login from './components/login';
import Register from './components/register';
import { Route } from 'wouter';
import './App.css';

function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-green'>
      <Route path='/' component={Start} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </main>
  );
}

export default App;
