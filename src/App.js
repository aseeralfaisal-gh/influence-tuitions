import './App.css';
import Navbar from './comps/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Startpage from './comps/Startpage';

function App() {
  document.title='Influence Tuitions';
  return (
    <BrowserRouter>
      <div className="App">
        <div className='child'>
          <div className='child1'></div></div>
        <Navbar />
      </div>
      <Startpage text='Welcome' desc='to the our official website' par='A tuition media agency in Dhaka Area' 
      par1='We provide experienced tutors for students at home' />
    </BrowserRouter>
  );
}

export default App;
