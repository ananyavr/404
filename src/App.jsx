import React from 'react';
import AadharVerification from './components/AadharVerification';

function App() {
  return (
    <div>
      <p>
        {/* Add the image before the heading */}
        <img
          src="https://th.bing.com/th?id=OIP.F_OGbA70Drg8vmiDoCYRTAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          style={{ marginRight: '10px', width: '50px', height: '50px' }}
          //alt="RVITM Logo"
        />
        <span style={{ fontFamily:'Palatino Linotype, Book Antiqua, Palatino, serif'}}>GOVERNMENT OF RVITM</span>
      </p>
      <AadharVerification />
    </div>
  );
}

export default App;
