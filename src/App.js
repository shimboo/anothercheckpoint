
import './App.css';
import { Navbar, Nav, Container, Form, Button, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Bright Star University</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="https://bsu.edu.ly/En/About">About</Nav.Link>
              <Nav.Link href="http://te.bsu.edu.ly/">Colleges</Nav.Link>
              <Nav.Link href="https://bsu.edu.ly/En/Books">Library</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      {/* <img src="" alt="Girl in a jacket" width="500" height="600"> */}
      <Card className="test" border="success" style={{ width: '18rem' }}>
        <Card.Header>How to be a great student</Card.Header>
        <Card.Body>
          <Card.Title>The Basics of Being a Good Student</Card.Title>
          <Card.Text>
            Prioritize your life: Doing well in school should be your top priority. Study: There is no substitute. Always attend class. Do all of the homework and assigned reading. Develop self-discipline.
          </Card.Text>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I'm Not a Ropot" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <footer>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://bsu.edu.ly/En/Default"> Bright Star University </a>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default App;
