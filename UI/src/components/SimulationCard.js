import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import React, {useState, useEffect, useRef} from 'react';
import './page.css';
import ColoredLine from './ColoredLine';
import Legend from './Legend';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function SimulationCard() {


const [displayArray, changeArray] = useState([
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0],
  [3,3,1,1,1,1,1,0,0],
  [1,3,1,0,0,0,1,0,0],
  [1,3,3,2,1,0,1,0,0],
  [0,1,1,1,1,4,1,0,0],
  [0,0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0],
]);

function backgroundChooser(value){
  switch (value) {
    case 0:
      return 'open';
      
    case 1:
      return 'wall';
      
    case 2:
      return 'robot';
     
    case 3:
      return 'path';
    case 4:
      return 'end';

    default:
      return 'open';
      
  }
}


return (
    
        <Card className='shadow-sm simulation-card'>
              <Card.Body>
              
                <Card.Title>Simulation</Card.Title>
                
                  <ColoredLine color='black'/>
                
                <Legend/>
                
                

                <Container>
                  {displayArray.map((currentArr, i) => 
                  <Row>
                    {currentArr.map((currentItem, i)=>

                    <Col  > 
                      {/* <DropdownButton id="dropdown-basic-button" variant='secondary'  >
                        <Dropdown.Item ><div className='open '>&nbsp;</div>a</Dropdown.Item>
                        <Dropdown.Item ><div className='wall '>&nbsp;</div>a</Dropdown.Item>
                        <Dropdown.Item ><div className='robot '>&nbsp;</div>a</Dropdown.Item>
                        <Dropdown.Item ><div className='end '>&nbsp;</div>a</Dropdown.Item>
                    </DropdownButton> */}


                      <Dropdown drop={"down-centered"}>
                            <Dropdown.Toggle variant="secondary"  id="dropdown-basic" > 
                              
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='min- ' drop={"down-centered"}>
                                <Dropdown.Item className=' w-100'><div className='open '></div></Dropdown.Item>
                                <Dropdown.Item className=' w-100'><div className='wall '></div></Dropdown.Item>
                                <Dropdown.Item className=' w-100'><div className='robot '></div></Dropdown.Item>
                                <Dropdown.Item className=' w-100'><div className='end '></div></Dropdown.Item>
                            </Dropdown.Menu>
                      </Dropdown>


                    </Col>)}
                  </Row>
                  )}

                </Container>
                

                
              </Card.Body>
            </Card>

    
)
}
export default SimulationCard;