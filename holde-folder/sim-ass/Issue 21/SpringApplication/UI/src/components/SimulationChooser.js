import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import ColoredLine from './ColoredLine';
import "./page.css"


import React, {useState, useEffect, useRef} from 'react';
function SimulationChooser() {

const [layouts, changeLayouts] = useState(["layout1","layout2","layout3" ])
const [rulesets, changeRulesets] = useState(["ruleset1","ruleset2","ruleset3" ])





return (
    
        <Card className='simulation-chooser shadow-sm'>
              <Card.Body >
                <Card.Title>Settings</Card.Title>
                <ColoredLine color = 'black'/>

                       <Stack gap={3}>
                      <Dropdown bg='dark'>
                            <Dropdown.Toggle variant="secondary" bg='dark' id="dropdown-basic" > 
                              Layouts
                            </Dropdown.Toggle>

                            <Dropdown.Menu className=' '>
                              {layouts.map((layout, i)=><Dropdown.Item >{layout}</Dropdown.Item>)}
                            </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown>
                          <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                            Rulesets
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                            {rulesets.map((ruleset, i)=><Dropdown.Item >{ruleset}</Dropdown.Item>)}
                          </Dropdown.Menu>
                    </Dropdown>
                     <Form.Control
                              placeholder="Loops"
                              aria-label="Loops"
                              aria-describedby="basic-addon1"/>
                    <Button variant="primary" size="md">Run Simulation</Button>
                    </Stack>

              </Card.Body>
            </Card>

    
)
}
export default SimulationChooser;