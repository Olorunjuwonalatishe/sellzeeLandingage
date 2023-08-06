import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Section3 from './Components/Main/MainComponents/Section3';
import Section4 from './Components/Main/MainComponents/Section4';
import Section5 from './Components/Main/MainComponents/Section5';
import Section6User from './Components/Main/MainComponents/Section6User';
import Section7 from './Components/Main/MainComponents/Section7';
import Section8Newsletter from './Components/Main/MainComponents/Section8Newsletter';
import Section2 from './Components/Main/Section2';
function App() {
  return (
    <div className="App">
      <Header />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6User/>
      <Section7/>
      <Section8Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
