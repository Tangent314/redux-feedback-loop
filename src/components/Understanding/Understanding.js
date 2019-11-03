import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import swal from 'sweetalert'

class Understanding extends Component {
    state = {
        understanding: '',
    }

    // click handler for next button
    handleClick = (event) => {
        event.preventDefault();
        if(this.state.understanding === '' || 0) { swal('Please enter a rating')}
        else{
            this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding});
            this.props.history.push('/support');
        }
    }

    handleChange = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        });
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography color="textPrimary">
                            How well are you understanding the content?
                        </Typography>
                        <Typography component="div">
                            <Input type="number" value={this.state.understanding} onChange={this.handleChange}></Input>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.handleClick}>Next</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default connect()(Understanding);