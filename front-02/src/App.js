
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import SideBar from './componentes/sidebar/sidebar';
import Headers from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Foto from './componentes/fotos/Fotos'


const App = () => {
  return (
  <>
  <div className="Caixa">
    <div className="div-01">
      <Headers/>
    </div>  
    <div className="div-02">
      <SideBar/>
      <div> 
          <h3> Curiosidades :</h3>
          <h3>Este site será o meu registro como filósofo, programador e pensador. Será apenas uma apresentação da minha mente.</h3>
          <p>A escolha do nome foi baseada no filme "The Lobster", dirigido por Yorgos Lanthimos. Resumindo em minha visão, eu realmente amo esse filme pelo fato de mostrar que hoje em dia as pessoas buscam proximidade pela carne, em vez da alma. Explico mais nas minhas análises de filmes.</p>
      </div>
    </div>  
    <div className="div-03">
      
      <Foto/>
    </div>  

    <div className="div-11"><Footer/></div>   
    </div>
   </>
  );
};

export default App;