import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './contato.css'
import SideBar from '../../componentes/sidebar/sidebar';
import Headers from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contato = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState({
    Nome: '',
    descricao: '',
    feita: false,
  });

  useEffect(() => {
    // Realizar a requisição GET para obter a lista de tarefas
    // http://127.0.0.1:8000/
    // http://15.229.23.203:8000/Tarefas/
    axios.get('http://127.0.0.1:8000/Tarefas/')
      .then(response => {
        setTarefas(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de tarefas:', error);
      });
  }, []);



  const handleChange = e => {
    const { name, value } = e.target;
    setNovaTarefa(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Realizar a requisição POST para adicionar a nova tarefa
    axios.post('http://127.0.0.1:8000/Tarefas/', novaTarefa)
      .then(response => {
        setTarefas(prevState => [...prevState, response.data]);
        setNovaTarefa({
          Nome: '',
          descricao: '',
          feita: false,
        });
      })
      .catch(error => {
        console.error('Erro ao adicionar a tarefa:', error);
      });
  };
  const handleDelete = (id) => {
    // Realizar a requisição DELETE para remover a tarefa pelo ID
    axios.delete(`http://15.229.23.203:8000/Tarefas/${id}/`)
      .then(response => {
        // Atualizar a lista de tarefas após a remoção
        setTarefas(prevState => prevState.filter(tarefa => tarefa.id !== id));
      })
      .catch(error => {
        console.error('Erro ao deletar a tarefa:', error);
      });
  };

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
              <a href="mailto:paulo.moraes1@uscsonline.com.br">paulo.moraes1@uscsonline.com.br</a>
            </p>
          </div>
        </div>  
        <div className="div-03">
          <Table  variant="dark" striped bordered hover>
            <thead>
              
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {tarefas.map(tarefa => (
                <tr key={tarefa.id}>
                  <td>{tarefa.id}</td>
                  <td>{tarefa.Nome}</td>
                  <td>{tarefa.descricao}</td>
                  <td>{tarefa.feita ? 'Feita' : 'Pendente'}</td>
                  <td><Button variant="danger" onClick={() => handleDelete(tarefa.id)}>
                      Deletar
                    </Button></td>
                </tr>
              ))}
            </tbody>
            
          </Table>
                          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                name="Nome"
                value={novaTarefa.Nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="descricao">
              <Form.Label>Descrição:</Form.Label>
              <Form.Control
                type="text"
                name="descricao"
                value={novaTarefa.descricao}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="feita">
              <Form.Check
                type="switch"
                label="Feita"
                name="feita"
                checked={novaTarefa.feita}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Adicionar Tarefa
            </Button>
          </Form>
          
        </div>  
        <div className="div-11">
          <Footer/>
        </div>   
      </div>
    </>
  );
};

export default Contato;
