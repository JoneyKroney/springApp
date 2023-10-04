import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState, useEffect, useRef} from 'react';
import './page.css';
import ColoredLine from './ColoredLine';
function SimulationCard() {


const [displayArray, changeArray] = useState([
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]
]);




return (
    <div>
        <Card style={{  }}>
              <Card.Body>
                <Card.Title>Simulation</Card.Title>
                <ColoredLine color = 'black'/>
                
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

                <Container>
                  {displayArray.map((currentArr, i) => 
                  <Row>
                    {currentArr.map((currentItem, i)=><Col className='border1'>{currentItem}</Col>)}
                  </Row>)}

                </Container>


                
              </Card.Body>
            </Card>

    </div>
)
}
export default SimulationCard;