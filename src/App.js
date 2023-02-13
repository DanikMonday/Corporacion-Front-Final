
import './App.css';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { FormCondicional } from './components/FormCondicional';
import { FormNatural } from './components/FormNatural';
import { Header } from './components/Header';
import { Session } from './components/Session';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        {/* <div className='lateral'><Aside/></div>
        <div className='central-body'><Session/></div> */}
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
