import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { request } from "../helper";

export default class UniqueForm extends React.Component {
  render() {
    return (
      <Form
        onSubmit={event => {
            event.preventDefault()
            // props.handleSubmitNewReview(event,props.currSnack.id,props.authState.id)
          }}>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
