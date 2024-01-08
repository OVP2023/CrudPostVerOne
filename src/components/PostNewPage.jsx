import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostNewPage() {
  const [content, setContent] = useState('');
  let idSave=0

  //функция добавления нового поста
  async function addNewPost(idV,contentV) {
    let user = {
      id: idV,
      content: contentV
    };
    let response = await fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });
    }


  function handleSubmit(event) {
    event.preventDefault();
    console.log('контент:', content);
    //функция добавления нового поста
    idSave=idSave+1
    addNewPost(idSave,content); 

  }

 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label>    </Form.Label>
        <Form.Control as="textarea" rows={3}  size="lg" value={content} onChange={(e) => setContent(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="outline-primary">Опубликовать</Button>   
    </Form>
  )
}
export default PostNewPage;   
