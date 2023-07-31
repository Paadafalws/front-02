import React from 'react';
import './sidebar.css'
import { Nav, Button, } from "react-bootstrap";
import classNames from "classnames";
import eu from '../../imgs/eu.png'
import Criar from "../modal/Criar";


class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="round-image-container">

          <img src={eu} alt="Imagem Redonda" className="imgcont" />

        </div>

        <Nav className="Textos">
          <h1>Paulo Ricardo Moraes Camargo</h1>
          <h4>Santo Saulo</h4>
          
          <br></br>

          <br></br> 

          <h5>"Onde o Estado falha, a anarquia impera" - Santo Saul</h5>
          <h6>"Minha esperança se esvai com o passar do tempo. Sem você ao meu lado, estou no limbo eterno. Não há motivo para caminhar, apenas desejo ver seu sorriso novamente."  - Santo Saul</h6>
          <Nav.Item className='botao-central'> 
            <Button variant='secondary'> <Criar/> </Button>
          </Nav.Item>
        </Nav>

      </div>
    );
  }
}

export default SideBar;

