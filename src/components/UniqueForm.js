import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { request } from "../helper";

export default class UniqueForm extends React.Component {
  constructor(props){
  super(props)

  this.state ={
    submission: '',
    result: '',
    cache: {}
  }
}

  handleSubmit = (event) => {
    const text = event.target.text.value
    console.log(text)
    let result
    if(text[0]===" " && text[1]===" ") {
      result = Math.floor(Math.random()*70)
    } else if(text[0]===" ") {
      result = Math.floor(Math.random()*10)+80
    } else if(text[0]!==" ") {
      result = Math.floor(Math.random()*10)+90
    }
    this.setState({ result: result})
  };

  render() {
    return (
      <div>
        <div className='results'>
          <h1>
            {this.state.result}
          </h1>
        </div>
        <Form
          onSubmit={event => {
              event.preventDefault()
              console.log('hello', this.state.result)
              this.handleSubmit(event)
            }}>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>

    );
  }
}
