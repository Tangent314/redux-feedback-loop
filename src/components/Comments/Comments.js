import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import swal from 'sweetalert';
import axios from 'axios';


class Comments extends Component {
    state = {
        comments: '',
    }

    // click handler for next button
    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_COMMENT', payload: this.state.comments});
        this.props.history.push('/review');
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography color="textPrimary">
                            Any comments you want to leave?
                        </Typography>
                        <Typography component="div">
                            <Input type="text" value={this.state.comments} onChange={this.handleChange}></Input>
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

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Comments);