import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './fotos.css'

function C() {
    const [dados, setDados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

  

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Quadros/')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []);
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className='div-03' >
      {dados.map((item, id) => (
        <Card key={id} className='quadro'>
          <Card.Img variant="top" src={item.Quadrofoto} />
          <Card.Body>
            <Card.Title id={`Nome-${id}`}><h1>Nome Quadro: {item.Nome}</h1>
            </Card.Title>
            <Card.Text>  
                <h2>Autor: {item.Autor}</h2>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><p> Data: {item.data_quadro} </p></ListGroup.Item>
            <ListGroup.Item><p> Nota: {item.avaliacao}/5 </p></ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="secondary" onClick={() => handleOpenModal(item) }>
            Descrição
            </Button>
          </Card.Body>
        </Card>
      ))}
        <Modal show={showModal} onHide={handleCloseModal} className='modal'>
        {selectedItem && (
            <>
            <Modal.Header closeButton>
                <Modal.Title><h1>Nome Quadro: {selectedItem.Nome}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{selectedItem.descricao}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                Fechar
                </Button>
            </Modal.Footer>
            </>
        )}
        </Modal>
    </div>

  );
}

export default C;
