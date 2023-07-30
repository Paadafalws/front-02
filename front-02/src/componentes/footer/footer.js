import React from 'react';
import './Footer.css'; // Importe o arquivo de estilos CSS para o rodapé

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Todos os direitos reservados  ao Paulo Ricardo Moraes Camargo &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
