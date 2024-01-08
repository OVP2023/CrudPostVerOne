import { useEffect,useState } from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function PostEditPage() {
      const [content, setContent] = useState(localStorage.getItem('content'));
      //выгрузка записей с сервера 
      const id_d=localStorage.getItem('id')
     
      async function editPost(idV,contentV) {
        let user = {
          id: idV,
          content: contentV
        };
        console.log('http://localhost:7070/posts/'+idV)
        let response = await fetch('http://localhost:7070/posts/'+idV, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
          });
      }


      function handleSubmit(event) {
        event.preventDefault();
        console.log('id',id_d,'контент:', content);
        //функция изменения поста
        editPost(id_d,content); 
    
      }

      return (
        <> 
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>    </Form.Label>
              <Form.Control as="textarea" rows={3}  size="lg"  value={content}  onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="outline-primary">Сохранить</Button>   
          </Form>
        </>
      )
  }


  export default PostEditPage;  