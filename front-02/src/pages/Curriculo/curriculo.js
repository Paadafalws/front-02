
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
      <div className='curriculo'>
      <h1>Paulo Ricardo Moraes C.</h1>
      <h3>Estudante de Análise e Desenvolvimento de Sistemas</h3>
      <p>São Paulo, São Caetano do Sul, Santa Paula</p>
      <p>Contatos: paul.lockeex@gmail.com | Tel: 11 97397-5463</p>
      
      <h2>História</h2>
      <p>Sou um estudante focado em programação e busco oportunidades como estágio ou aprendizagem para desenvolver meus conhecimentos sobre regras de negócios, identificando os desafios dos clientes e criando soluções adequadas. Meu objetivo é trabalhar com tecnologia ambiental na América Central e Latina.</p>

      <h2>Formação</h2>
      <ul>
        <li>Etec Jorge Street - Eletrônica Técnico - Jan 2020 a Ago 2021, São Caetano do Sul</li>
        <li>USCS - Universidade de São Caetano do Sul - Análise e Desenvolvimento de Sistemas (Cursando) - Jun 2021 a Atual, São Caetano do Sul</li>
      </ul>

      <h2>Prêmios</h2>
      <ul>
        <li>Línguas: Inglês (B2 - Altissia), Coreano (Iniciante A2)</li>
        <li>Propriedade cultural da arte poesia sobre os aspectos filosóficos da sociedade (2021)</li>
        <li>Innovation Camp [Motorola 2020] - 2º lugar</li>
        <li>Hackathon da Biophesa [2022] - 2º lugar</li>
        <li>IT Essentials [Cisco 2021] CC</li>
      </ul>

      <h2>Experiência</h2>
      <h3>Ambroseg - Auxiliar Administrativo</h3>
      <p>Desde Abr 2022 - Atual, Santo André</p>
      <p>Responsável por gerenciar os departamentos financeiro, marketing e gestão de dados, atuando como líder de cada um deles.</p>

      <h3>Makess - Líder de Implantação</h3>
      <p>Dez 2022 - Mar 2023, São Caetano do Sul</p>
      <p>Auxílio na implementação do sistema ERP na empresa, fortalecendo o controle administrativo e infraestrutura de TI.</p>

      <h3>Bom Controle - Estagiário</h3>
      <p>Fev 2022 - Set 2022, São Caetano do Sul</p>
      <p>Apoio remoto em SAS (Software as a Service) e contabilidade, auxiliando no faturamento de NFSE (Nota Fiscal de Serviço Eletrônica) e NFE (Nota Fiscal Eletrônica), bem como registro de acessos através de logs.</p>

      <h3>RF Contabilidade - Auxiliar de Contabilidade</h3>
      <p>Jul 2017 - Fev 2018, Mongaguá</p>
      <p>Responsável por atividades contábeis, planejamento de impostos sobre produtos e cálculos e reconciliações.</p>

      <h3>Hospital Municipal de Emergência Albert Sabin de SCS - Jovem Aprendiz</h3>
      <p>Abr 2014 - Set 2014, São Caetano do Sul</p>
      <p>Atendimento e direcionamento de pacientes para as salas apropriadas. Assistência a pacientes com questões relacionadas a acompanhantes e outras demandas.</p>

      </div>

    </div>  

    <div className="div-11"><Footer/></div>   
    </div>
   </>
  );
};

export default Curriculo;