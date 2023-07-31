
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './curriculo.css'
import SideBar from '../../componentes/sidebar/sidebar';
import Headers from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';



const Curriculo = () => {
  return (
  <>
  <div className="Caixa">
    <div className="div-01">
      <Headers/>
    </div>  
    <div className="div-02">
      <SideBar/>
      <div className='minibox'> 
          <h3> Curiosidades :</h3>
          <h4>Este site será o meu registro como filósofo, programador e pensador. Será apenas uma apresentação da minha mente.</h4>
          <h3>A escolha do nome foi baseada no filme "The Lobster", dirigido por Yorgos Lanthimos. Resumindo em minha visão, eu realmente amo esse filme pelo fato de mostrar que hoje em dia as pessoas buscam proximidade pela carne, em vez da alma. Explico mais nas minhas análises de filmes.</h3>
      </div>
      <div className='minibox'> 
      <h2>Gostou de alguma Análise minha? Envie-me uma mensagem:</h2>
      <p>
        <a href="mailto:paulo.moraes1@uscsonline.com.br">paulo.moraes1@uscsonline.com.br
        </a>
        </p>
      </div>
    </div>  
    <div className="div-03">
      

    </div>  

    <div className="div-11"><Footer/></div>   
    </div>
   </>
  );
};

export default Curriculo;