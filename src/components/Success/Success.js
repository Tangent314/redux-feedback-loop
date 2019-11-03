import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Success extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <Card className="card">
                    <CardContent>
                        <Typography color="textPrimary">
                            Thank you for your feedback!
                        </Typography>
                        <Button variant="contained" color="primary" onClick={this.handleClick}>Leave New Feedback</Button>
                    </CardContent>
            </Card>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Success);