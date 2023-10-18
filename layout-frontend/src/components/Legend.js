import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import React, {useState, useEffect, useRef} from 'react';
import './page.css';
import ColoredLine from './ColoredLine';
function Legend() {



return (
   
              <fieldset className='legend'>
                <legend>Legend:</legend>
                
                <div>
                  <div>
                    <div className='open '></div>
                    <p>Open</p>
                  </div>

                  <div>
                    <div className='wall '></div>
                    <p >Wall</p>
                  </div>

                  <div>
                    <div className='robot '></div>
                    <p>Robot</p>
                  </div>

                  <div>
                    <div className='end '></div>
                    <p>End</p>
                  </div>

                </div>
              </fieldset>
               
)
}
export default Legend;