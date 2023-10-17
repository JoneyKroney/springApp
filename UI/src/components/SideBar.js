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
import { BsFillPieChartFill, BsTools, BsFillFileRuledFill } from "react-icons/bs";
import {RiRobot2Fill} from "react-icons/ri"
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


import React, {useState, useEffect, useRef} from 'react';
function SideBar() {






return (
    
  <Card className='side-bar ' bg='dark' text='light' >
    <div>
      <Card.Title><RiRobot2Fill/> Capstone Project</Card.Title>
      <ColoredLine color='white'/>
      <Button variant="dark"><MdSpaceDashboard/>   Dashboard</Button>
      <Button variant="dark"><BsFillFileRuledFill/> Rules</Button>
      <Button               ><TfiLayoutGrid3Alt/>     Layout</Button>
      <Button variant="dark"><BsTools/>            Simulation</Button>
      <Button variant="dark"><BsFillPieChartFill/> Reports</Button>
    </div>

    <div>
      <ColoredLine color='white'/>
      <Button variant="dark" >Signout</Button>
    </div>
  </Card>

    
)
}
export default SideBar;