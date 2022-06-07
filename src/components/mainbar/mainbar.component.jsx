import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CustomDropdown from 'components/custom-dropdown/custom-dropdown.component';

import MSidebar from 'components/msidebar/msidebar.component';

const expand = 'lg';

const Mainbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        {/* <Navbar.Brand href="#">Reporting</Navbar.Brand> */}
        <MSidebar show={showSidebar} onClose={() => { setShowSidebar(false); }}/>
        <Nav.Link onClick={() => { setShowSidebar(true) }}>
          <i className="fa-solid fa-bars"></i>
        </Nav.Link>
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
              {/* <Nav.Link href="#action1">
                <i className="fa-solid fa-bell"></i>
                <span style={{ fontSize: '12px', lineHeight: '12px', verticalAlign: 'top'}}>
                  <Badge bg="primary">7</Badge>
                </span>
              </Nav.Link> */}
              <Nav.Link href="#action2">
                <i className="fa-solid fa-envelope"></i>
                <span style={{ fontSize: '12px', lineHeight: '12px', verticalAlign: 'top'}}>
                  <Badge bg="primary">99+</Badge>
                </span>
              </Nav.Link>
              
            </Nav>

            <CustomDropdown
              title={<i className="fa-solid fa-bell" />}
              //items={[]}
              actions={[]}
              callback={() => {}}
            />

            <Nav>
                <NavDropdown
                    title={<i className="fa-solid fa-user"></i>}
                    //id={`offcanvasNavbarDropdown-expand-${expand}`}
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
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        
      </Container>
    </Navbar>
  )
}

export default Mainbar;
