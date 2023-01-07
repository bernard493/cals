import React,{useState} from 'react';
import { Calculator } from './Components/Calculator/Calculator';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [theme ,setTheme] = useState(1)



  function toggle(){
    theme === 3 ?
    setTheme(1):
    setTheme(prev => prev + 1)

  }
  

  const styles = theme === 2 ? {
           backgroundColor : "#E6E6E6",      
      } : theme === 3 ? {
        backgroundColor :'#160628'
      }:{
        backgroundColor : "#3B4664"
      }
      



  return (
    <div className="bg-[#3B4664] h-screen" style={styles}>
      <Navbar
      toggle={toggle}
      theme={theme}
      />
      <Calculator
       theme={theme} 
       />
    </div>
  );
}

export default App;
