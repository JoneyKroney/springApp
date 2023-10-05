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
    <div>
        <Card className='shadow-sm simulation-card'>
              <Card.Body>
              
                <Card.Title>Simulation</Card.Title>
                
                  <ColoredLine color='black'/>
                
                <Legend/>
                
                

                <Container>
                  {displayArray.map((currentArr, i) => 
                  <Row>
                    {currentArr.map((currentItem, i)=><Col className={backgroundChooser(currentItem)} ></Col>)}
                  </Row>
                  )}

                </Container>
                

                
              </Card.Body>
            </Card>

    </div>
)
}
export default SimulationCard;