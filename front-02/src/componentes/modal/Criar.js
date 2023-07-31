import React, { useState } from 'react';
import axios from 'axios';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Criar() {

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Nome: '',
    Autor: '',
    Quadro: '',
    data_quadro: '',
    Quadrofoto: null, // Alterado para null, pois é um arquivo e não uma string
    avaliacao: '',
    descricao: '',
  });

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    const formDataToSend = new FormData();
    formDataToSend.append('Quadrofoto', formData.Quadrofoto);
    formDataToSend.append('Nome', formData.Nome);
    formDataToSend.append('Autor', formData.Autor);
    formDataToSend.append('Quadro', formData.Quadro);
    formDataToSend.append('data_quadro', formData.data_quadro);
    formDataToSend.append('avaliacao', formData.avaliacao);
    formDataToSend.append('descricao', formData.descricao);
  
    // Realizar o POST na API usando o axios com o objeto FormData
    axios.post('http://127.0.0.1:8000/Quadros/', formDataToSend)
      .then(response => {
        console.log('Quadro criado com sucesso:', response.data);
        setShowForm(false);
      })
      .catch(error => {
        console.error('Erro ao criar o quadro:', error);
      });
  };

  return (
    <div>
      {/* Botão para abrir o formulário */}
      <Button variant="primary" onClick={handleOpenForm}>
        Analise
      </Button>

      {/* Formulário */}
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Criar avaliação </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} enctype="multipart/form-data">
            {/* Campos do formulário */}
            <Form.Group controlId="nome">
              <FormLabel>Nome:</FormLabel>
              <Form.Control
                type="text"
                value={formData.Nome}
                onChange={(e) => setFormData({ ...formData, Nome: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="autor">
              <FormLabel>Autor:</FormLabel>
              <Form.Control
                type="text"
                value={formData.Autor}
                onChange={(e) => setFormData({ ...formData, Autor: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="data_quadro">
              <FormLabel>Quadro:</FormLabel>
              <Form.Control
                type="date"
                value={formData.data_quadro}
                onChange={(e) => setFormData({ ...formData, data_quadro: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="Quadrofoto">
              <FormLabel>Foto quadro:</FormLabel>
              <Form.Control
                type="file"
                onChange={(e) => setFormData({ ...formData, Quadrofoto: e.target.files[0] })} // Alterado para pegar o arquivo corretamente
              />
            </Form.Group>
            <Form.Group controlId="avaliacao">
              <FormLabel>Avaliação:</FormLabel>
              <Form.Control
                type="inter"
                value={formData.avaliacao}
                onChange={(e) => setFormData({ ...formData, avaliacao: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="descricao">
              <FormLabel>Descrição:</FormLabel>
              <Form.Control
                type="text"
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              />
            </Form.Group>
              <br></br>
            <Button variant="primary" type="submit">
              Criar
            </Button>
            <Button variant="secondary" onClick={handleCloseForm}>
              Cancelar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Criar;
