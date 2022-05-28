import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


import Mainbar from 'components/mainbar/mainbar.component';
import Sidebar from 'components/sidebar/sidebar.component';
import View from 'components/view/view.component';
import HomeContainer from 'containers/home/home-container.component';

const expand='lg';

const Layout  = () => (
  <>
  <Mainbar />
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
        <Sidebar />
      </Col>
      <Col style={{ paddingTop: '20px'}}>
        <View
          title="Welcome to the jungle"
        >
          <HomeContainer />
        </View>
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

