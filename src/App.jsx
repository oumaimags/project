import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Client from './components/CLient';
import DemandeReparation from './components/DemandeReparation';
import Facture from './components/facture';
import PieceRechange from './components/PieceRechange';
import Reparation from './components/Reparation';
import Accueil from './components/Accueill';
import Login from './components/Login';
function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Accueil />}></Route>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Client" element={<Client/>}/>
            <Route path="/DemandeReparation" element={<DemandeReparation />}/>
            <Route path="/PieceRechange" element={<PieceRechange />}/>
            <Route path="/Reparation" element={<Reparation />}/>
            <Route path="Facture" element={<Facture />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
