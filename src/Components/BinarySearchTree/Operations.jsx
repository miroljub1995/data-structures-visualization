import React, {Component} from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  Row,
  Grid,
  Col
} from 'react-bootstrap';

export default class Operations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insertValue: "",
      isInsertValueInvalid: false
    };
  }

  handleInsert = () => {
    debugger;
    this.setState({isInsertValueInvalid: false});
    const {onInsert} = this.props;
    const values = this.state.insertValue.split(',');
    const regex = /^-?\d*$/;
    if (values.some(v=>!v.match(regex))){
      this.setState({isInsertValueInvalid: true});
      return;
    }
    this.setState({insertValue: ""})
    onInsert(values.map(v=>parseInt(v)));
  }

  handleInsertChange = (sender) => {
    const text = sender.target.value;//.replace(/\s/g, '');
    this.setState({insertValue: text})
  }

  render() {
    return (<div>
      <FormGroup>
        <Grid>
          <Row>
            <Col xs={3} sm={2} md={2}>
              <FormControl style={this.state.isInsertValueInvalid ? {borderColor: 'red'} : {}} value={this.state.insertValue} placeholder="Example: 10,15,-4" onChange={this.handleInsertChange}/>
            </Col>
            <Col xs={1} sm={1} md={1}>
              <Button onClick={this.handleInsert}>Insert</Button>
            </Col>
          </Row>
        </Grid>
      </FormGroup>
    </div>);
  }
}
