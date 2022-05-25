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
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';


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
              <i className="fa-solid fa-envelope"></i>
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
              title={<i className="fa-solid fa-user"></i>}
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
      <Col 
        xs={2} 
        style={{ 
          borderRight: 'solid 1px #ddd', 
          //background: '#333', 
          resize: 'horizontal',
          height: '100vh'
        }}
      >
        <Nav.Link>Reports</Nav.Link>

        <Nav bg='dark' defaultActiveKey="/home" className="flex-column" style={{ paddingLeft: '10px'}}>
          <Nav.Link href="/home">Templates</Nav.Link>
          <Nav.Link eventKey="link-1">Reports</Nav.Link>
          <Nav.Link eventKey="link-2">Share</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </Col>
      <Col style={{ paddingTop: '20px'}}>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Reports
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    active
                  >
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col xs={1} style={{ textAlign: 'right'}}>
                <CloseButton />
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* <Container fluid>
          
          <Row>
            <Col style={{ border: 'solid 1px red'}}>
              <Breadcrumb className='align-middle'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Reports
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                >
                  Data
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col>
            <CloseButton className='float-right' />
            </Col>
          </Row>
        
        Work Area
      </Container> */ }
      
      </Col>
    </Row>
  </Container>
  </>
)

export default Layout;

