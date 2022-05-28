

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';


const View = ({ title, children }) => (
  <Card>
    <Card.Header>
      <Row>
        <Col>
          {/* <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Reports
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
            >
              Data
            </Breadcrumb.Item>
          </Breadcrumb> */}
          {title}
        </Col>
        <Col xs={1} style={{ textAlign: 'right'}}>
          <CloseButton />
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      { children }
    </Card.Body>
    {/* <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body> */}
  </Card>
)

export default View;