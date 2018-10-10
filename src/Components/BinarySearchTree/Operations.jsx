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
            insertValue: ""
        };
    }

    handleInsert = () => {
        const {onInsert} = this.props;
        onInsert(this.state.insertValue);
    }

    handleInsertChange = (sender) => {
        const val = sender.target.value;
        if(isNaN(val))
          return;
        this.setState({insertValue: val})
    }

    render() {
        return (<div>
            <FormGroup>
                <Grid>
                    <Row>
                        <Col xs={3} sm={2} md={2}>
                            <FormControl value={this.state.insertValue} placeholder="Enter number" onChange={this.handleInsertChange}/>
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
