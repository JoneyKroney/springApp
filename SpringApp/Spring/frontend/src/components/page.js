import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimulationCard from "./SimulationCard.js"
import SimulationChooser from "./SimulationChooser.js"
import SideBar from "./SideBar.js"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';

function page() {

return (
<Container fluid className='margin0 padding0 width100' >
    <Row className=''>
        <Col sm={2}>
            <SideBar/>
        </Col>

        <Col sm={10}>
            <Container  className='height100 display-flex align-center'>
                

                
                <Row className='width100p'>
                    <Col sm={8}>
                        <SimulationCard/>
                    </Col>
                
                    <Col sm={4}>
                        <SimulationChooser/>
                    </Col>

                </Row>
            </Container>
        </Col>
    </Row>
</Container>
    

);

}
export default page;
