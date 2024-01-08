import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function PostDeletePage() {
  const [content, setContent] = useState('');
  const [id, setId] = useState(localStorage.getItem('id'));

    //функция удаления с сервера по id
  async function deletePost(id) {
      let res = await fetch('http://localhost:7070/posts/'+id,{method: 'DELETE',});  
    }

  function handleSubmit(event) {
      event.preventDefault();
      console.log('id:', id);
      //функция добавления нового поста
      deletePost(id); 
      setId('')
      localStorage.id=''
    }


  return (
    <>
      <div></div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>    </Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
          <Form.Label>Вы действительно хотите удалить пост с id={id}?</Form.Label> 
        </Form.Group>
        <Button type="submit" variant="outline-primary">Удалить пост </Button>   
      </Form>
    </>
  )
}


  export default PostDeletePage;  