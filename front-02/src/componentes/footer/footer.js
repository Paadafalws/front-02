import React from 'react';
import './Footer.css'; // Importe o arquivo de estilos CSS para o rodapé

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h9>Todos os direitos reservados  ao Paulo Ricardo Moraes Camargo &copy; {new Date().getFullYear()}</h9>
      </div>
    </footer>
  );
}

export default Footer;
