import React from 'react';
import {Form,Button,Alert} from 'react-bootstrap';

const CreateStartUps=(props)=>{
    return (
        <div>
        <Alert  variant='danger'>
            Create new startUp!
             </Alert>
        <form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter startup name" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Location:</Form.Label>
          <Form.Control type="text" name="location" placeholder="Enter Location:" />
        </Form.Group>
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
      </div>

    );
}


export default CreateStartUps;

