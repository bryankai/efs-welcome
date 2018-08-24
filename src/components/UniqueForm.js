import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { request } from "../helper";

export default class UniqueForm extends React.Component {
  constructor(props){
  super(props)

  this.state ={
    submission: '',
    result: '',
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
    const formPadding = {
      padding: "0 5% 0 5%"
    }

    return (
      <div>
        <div className='results'>
          <h1 className="score">
            {this.state.result}
          </h1>
        </div>
        <div className="instructions">
          <h3>
            Enter your submission for uniqueness ranking!
          </h3>
        </div>
        <div id="form-container" style={formPadding}>
          <Form
            onSubmit={event => {
                event.preventDefault()
                this.handleSubmit(event)
              }}>
            <FormGroup>
              {/* <Label for="exampleText">Text Area</Label> */}
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>

    );
  }
}
