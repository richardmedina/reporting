import Nav from 'react-bootstrap/Nav';


const Sidebar = () => (
  <>
    <Nav.Link>Reports</Nav.Link>
    <Nav bg='dark' defaultActiveKey="/home" className="flex-column" style={{ paddingLeft: '10px'}}>
      <Nav.Link href="/home">Templates</Nav.Link>
      <Nav.Link eventKey="link-1">Reports</Nav.Link>
      <Nav.Link eventKey="link-2">Share</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  </>
);

export default Sidebar;