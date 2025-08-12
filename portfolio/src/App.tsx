import Nav from './webcomp/nav'
import Info from './webcomp/info'

import Hobbies from './webcomp/hobbies';
import Footer from './webcomp/Footer';
import './App.css'

function App() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bg-gray-950 mt-18 bg-center h-full w-full z-0"></div>
        
        <div className="relative z-10">
          <Nav />
          <Info />
          
          <Hobbies />
          <Footer />
          
        </div>
      </div>
    </>
  );
}

export default App
