import Form from 'react-bootstrap/Form';
import './login.css';

function Login() {
  return (
    <div className="App">
      <div className="centered-div">
              
        <Form>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Introduce su usuario" />
          </Form.Group>

          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form>
      </div>
    </div>
  );
}

export default Login;