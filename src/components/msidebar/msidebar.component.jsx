import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = ({ show, onClose }) => {

  return (
    <Offcanvas show={show} onHide={() => { onClose && onClose(); }}>
        <Offcanvas.Header closeButton onClick={() => { 
          console.log('click');
          onClose && onClose() 
          }}>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Sidebar;