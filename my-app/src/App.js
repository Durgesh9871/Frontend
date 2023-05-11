import React from 'react';
import { AllRoutes } from './Routes/Routes';
import MainNavbar from './Header/Navbar';



function App() {
  return (
     <>
        {/* nav bar ------------ */}
       <MainNavbar />
        {/*all -- routes ------ */}
        <AllRoutes />
     </>
  );
}

export default App;
