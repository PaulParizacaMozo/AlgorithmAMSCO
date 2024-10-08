import React from 'react';
import AMSCOForm from './components/AMSCOForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Aplicación de Cifrado y Descifrado AMSCO</h1>
      <AMSCOForm />
    </div>
  );
};

export default App;
