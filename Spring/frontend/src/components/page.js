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
<Container fluid={true} className='page' >

        <style type="text/css">
            {`
        .btn-primary {
        
        --bs-btn-bg: #7749f8;
        --bs-btn-hover-bg: #6f44e4;
        --bs-btn-active-bg: #613dc5;

        --bs-btn-border-color: #7749f8 ;
        --bs-btn-hover-border-color: #6f44e4 ;
        --bs-btn-active-border-color: #613dc5 ;
        }

        .btn-secondary {
            --bs-btn-color: #6c757d;
            --bs-btn-hover-color: #6c757d;
            --bs-btn-active-color: #6c757d;

            --bs-btn-bg: #fff;
            --bs-btn-hover-bg: #fff;
            --bs-btn-active-bg: #fff;


            --bs-btn-border-color: #dee2e6;
            --bs-btn-hover-border-color: #6c757d;
            --bs-btn-active-border-color: #6c757d;

        }
        
        `}
        </style>

    <Row >
        <Col sm={2} className=' padding0'>
            <SideBar/>
        </Col>

        <Col sm={10}>
            <Container  fluid={true} className='height100 display-flex align-center'>
                

                
                <Row >
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
