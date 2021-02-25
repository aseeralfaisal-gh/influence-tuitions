import './App.css';
import Navbar from './comps/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Startpage from './comps/Startpage';
import SecDiv from './comps/SecDiv';


function App() {
  document.title = 'Influence Tuitions';
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <div className='child'>
          <div className='child1'></div></div>
      </div>
      <Startpage text='Welcome' desc='to the our official website' par='A tuition media agency in Dhaka Area'
        par1='We provide experienced tutors for students at home' />
      <SecDiv />
    </BrowserRouter>
  );
}

export default App;
