import React from 'react';
import Modal from'../Modal';
import history from '../../history';
//add action creator
import {connect } from 'react-redux';
import {fetchStream} from '../../actions';



class StreamDelete extends React.Component {
    
    componentDidMount(){
        //console.log(this.props); will show how to get id
        this.props.fetchStream(this.props.match.params.id);
        //need to use fetch stream action creator, uses id to fetch

    }
    
    //render actions as helper method
    renderActions() {
        return ( //renders buttons
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button ">Cancel</button>
            </React.Fragment>
        );
    }
    render(){

        return (
        <div>
            StreamDelete
            <Modal  
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions= {this.renderActions()}
                onDismiss={() => history.push('/')}
            /> {/* Renders modal element*/}
        </div>
        );

    }
}

export default connect(null, {fetchStream})(StreamDelete);