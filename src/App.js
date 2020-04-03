import React, {useState} from 'react';
import './App.css';
import {Button, FormGroup, Form, Input, Label} from 'reactstrap'

function App() {
  
  const [borRad, setBorRad ] = useState ('')
  const [bor1, setBor1] = useState(false)
  const [bor2, setBor2] = useState(false)
  const [bor3, setBor3] = useState(false)
  const [bor4, setBor4] = useState(false)

  function borA(bor, borRad){
    if(bor === true){
      return borRad
    }else{
      return 0
    }
  }

  function handleCheck(bor){
    if(bor === true){
      bor = false
      return bor
    }else{
      bor = true
      return bor
    }
  }

  const borderRadius = {
    borderRadius: `${borA(bor1,borRad)}px ${borA(bor2,borRad)}px ${borA(bor3,borRad)}px ${borA(bor4,borRad)}px`
  }

  // function copy(borderRadius){
    
  // }

  return (
    <div className="App container-fluid">
      <div className="row">
        <h1 className="col-12 text-center">Border Radius Preview</h1>
      </div>

      <Form className="container">
        <FormGroup row>
          <Input col={12} type="number" name="borderRadius" id="borderRadius" value={borRad} onChange={e => setBorRad(e.target.value)} placeholder="value in px of border"/>
        </FormGroup>
        <FormGroup row>
          <Label className="col-3">
            <Input type="checkbox" name="top-left-bor" id="top-left-bor" checked={bor1} onChange={() => setBor1(handleCheck(bor1))}/>
            Top-Left
          </Label>
          <Label className="col-3">
            <Input type="checkbox" name="top-right-bor" id="top-right-bor" checked={bor2} onChange={() => setBor2(handleCheck(bor2))}/>
            Top-right
          </Label>
          <Label className="col-3">
            <Input type="checkbox" name="bottom-right-bor" id="bottom-right-bor" checked={bor3} onChange={() => setBor3(handleCheck(bor3))}/>
            Bottom-right
          </Label>
          <Label className="col-3">
            <Input type="checkbox" name="bottom-left-bor" id="bottom-left-bor" checked={bor4} onChange={() => setBor4(handleCheck(bor4))}/>
            Bottom-left
          </Label>
        </FormGroup>
        {/* <FormGroup row>
          <Button onClick={copy(borderRadius)} color="primary" className="offset-4 col-4">
            Obtain The CSS Code
          </Button>
        </FormGroup> */}
      </Form>
      <div className="container">
        <div className="row box">
          <div className="inner-Box col-6 offset-3" style={borderRadius}>
          </div>
        </div>
        <div className="row">
          <h2 className="col-12 text-center">border-radius = {borderRadius.borderRadius};</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
