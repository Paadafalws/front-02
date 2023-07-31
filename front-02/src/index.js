import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contato from '../src/pages/Contato/contato'; // Importe o componente Contato
import Curriculo from '../src/pages/Curriculo/curriculo'; // Importe o componente Contato

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} /> 
        <Route path="/curriculo" element={<Curriculo />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);