import { truncateText } from 'helpers/strings';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';

import { items } from './test-data';

const maxStringLength = 12;
const visibleCount = 5;


const CustomDropdown = ({ title, items, actions, callback }) => {
  const slicedItems = (items ?? []).slice(0, visibleCount);
  const displayMessagesCount = (items ?? []).length > visibleCount;

  return (
    <Nav>
      <NavDropdown
          title={<>
              { title }
              <span style={{ fontSize: '12px', lineHeight: '12px', verticalAlign: 'top'}}>
                <Badge bg="primary">{(items ?? []).length}</Badge>
              </span>
              </>
          }
      >
        {
          (slicedItems ?? []).map((item, id) =>
            
            <NavDropdown.Item key={item.id}>
              <div style={{ display: 'flex', flexDirection: 'row' }} >
                <div style={{ flex: '0 0' }}>
                  { item.state === 0 && <i style={{ paddingRight: '10px' }} class="fa-solid fa-bell"></i> }
                  { item.state === 1 && <i style={{ paddingRight: '10px' }} class="fa-regular fa-bell"></i> }
                </div>
                
                <div style={{ flex: '1 0' }}> {truncateText(item.title, maxStringLength, "...") }</div>
                {/* <div
                  style={{
                    flex: '0 0'
                  }}
                >
                  <i style={{paddingLeft: '10px', color: '#aaa'}} class="fa-solid fa-trash"></i>
                </div> */}
              </div>
            </NavDropdown.Item>
          )
        }
        {
          displayMessagesCount && 
          <>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              See all {items.length} messages...
              {/* <i class="fa-solid fa-right-from-bracket"></i>
              &nbsp; Logout */}
            </NavDropdown.Item>
            </>
        }
      </NavDropdown>
    </Nav>
  )
}

CustomDropdown.defaultProps = {
  items
}

export default CustomDropdown;