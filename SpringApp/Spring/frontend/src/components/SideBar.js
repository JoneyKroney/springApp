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
import './page.css';
import ColoredLine from './ColoredLine';

import ButtonGroup from 'react-bootstrap/ButtonGroup';


import React, {useState, useEffect, useRef} from 'react';
function SideBar() {






return (
    <div>
        <Card bg='dark height100' text='light' className='height100 borderrad0'>
            <Card.Title>Super Cool Title</Card.Title>
              <ColoredLine color='white'/>
              
                <Button>Button</Button>
                <Button>Button</Button>
              


              <ColoredLine color='white'/>
            </Card>

    </div>
)
}
export default SideBar;