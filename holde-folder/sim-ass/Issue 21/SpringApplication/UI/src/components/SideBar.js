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
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPieChartFill, BsTools } from "react-icons/bs";
// import { MdSpaceDashboard } from "react-icons/md";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


import React, {useState, useEffect, useRef} from 'react';
function SideBar() {






return (
    
  <Card className='side-bar ' bg='dark' text='light' >
    <div>
      <Card.Title>Super Cool Title</Card.Title>
      <ColoredLine color='white'/>
      <Button><MdSpaceDashboard/> Dashboard</Button>
      <Button><BsFillPieChartFill/> Reports</Button>
      <Button><BsTools/> Simulation</Button>
    </div>

    <div>
      <ColoredLine color='white'/>
      <Button variant="dark" >Signout</Button>
    </div>
  </Card>

    
)
}
export default SideBar;