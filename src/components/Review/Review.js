import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import swal from 'sweetalert'
import axios from 'axios'


class Review extends Component {
    handleClick = (event) => {
        event.preventDefault();
        swal('Thank you for your feedback!!').then(() => {
            axios.post('/feedback',this.props.feedBackReducer)
            .then((response) => {
                swal('Your feedback was sent!!');
                this.props.history.push('/success');
            })
            .catch((error) => {
                console.log(error)
                swal('There was an issue with sending your feedback')
            })
        })
    }
    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography color="textPrimary">
                            Review Your FeedBack
                        </Typography>
                        <Typography component="div">
                            <p>Feelings: <span>{this.props.feedBackReducer.feeling}</span></p>
                            <p>Understanding: <span>{this.props.feedBackReducer.understanding}</span></p>
                            <p>Support: <span>{this.props.feedBackReducer.support}</span></p>
                            <p>Comments: <span>{this.props.feedBackReducer.comments}</span></p>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.handleClick}>Submit</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Review);