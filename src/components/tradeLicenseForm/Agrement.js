import React from 'react'
import { Form } from 'react-bootstrap';
import "../form.css"

function Agrement() {
  return (
    <Form>
      <Form.Group className="mb-3 checkbox" id="formGridCheckbox">
        <Form.Check type="checkbox" className="checkpoint"  label="I hereby declare that all the information mentioned above is true to my knowledge. In
            case of any discrepancies if arises I will be held responsible. Hence I request you to issue
            me D & O Trade License." />
        
        </Form.Group>
    </Form>            
  )
}

export default Agrement;