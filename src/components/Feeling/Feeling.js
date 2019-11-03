import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import swal from 'sweetalert'

class Feeling extends Component {
    state = {
        feeling: '',
    }

    // click handler for next button
    handleClick = (event) => {
        event.preventDefault();
        if(this.state.feeling === '' || 0) { swal('Please enter a rating')}
        else{
            this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling});
            this.props.history.push('/understanding');
        }
        
    }

    handleChange = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        });
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography color="textPrimary">
                            How are you feeling today?
                        </Typography>
                        <Typography component="div">
                            <Input  required type="number" value={this.state.feeling} onChange={this.handleChange}></Input>
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

export default connect()(Feeling);