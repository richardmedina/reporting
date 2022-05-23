import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Badge from 'react-bootstrap/Badge';



const expand='lg';

const Layout  = () => (
  <>
  <Navbar key={expand} bg="light" expand={expand} className="mb-3">
    <Container fluid>
      <Navbar.Brand href="#">Reporting</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">
              <i className="fa-solid fa-bell"></i>
              <span style={{ fontSize: '12px', lineHeight: '12px', verticalAlign: 'top'}}>
                <Badge bg="primary">7</Badge>
              </span>
            </Nav.Link>
            <Nav.Link href="#action2">
              <i class="fa-solid fa-envelope"></i>
              <span style={{ fontSize: '12px', lineHeight: '12px', verticalAlign: 'top'}}>
                <Badge bg="primary">99+</Badge>
              </span>
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav>
          <NavDropdown
              title={<i class="fa-solid fa-user"></i>}
              id={`offcanvasNavbarDropdown-expand-${expand}`}
              //className='dropdown-menu dropdown-menu-end'
            >
              <NavDropdown.ItemText>My account</NavDropdown.ItemText>
              <NavDropdown.Item href="#action3">Settings...</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <i class="fa-solid fa-right-from-bracket"></i>
                &nbsp; Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
      
    </Container>
  </Navbar>

  <Container fluid style={{ position: 'absolute', top: '50px', bottom: '5px'}}>
    <Row>
      <Col xs={2} style={{ border: 'solid 1px #ddd', background: '#333', height: '100vh'}}>
        <Nav.Link>Activities</Nav.Link>

        <Nav defaultActiveKey="/home" className="flex-column" style={{ paddingLeft: '10px'}}>
          <Nav.Link href="/home">Templates</Nav.Link>
          <Nav.Link eventKey="link-1">Reports</Nav.Link>
          <Nav.Link eventKey="link-2">Share</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </Col>
      <Col>
        Work Area
      </Col>
    </Row>
  </Container>
  </>
)

export default Layout;

