import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

//class based component 
class StreamEdit extends React.Component  {
    componentDidMount(){ 
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
    console.log(this.props);
    if(!this.props.stream) {
        return <div>Loading Please Wait</div> //if its the first render, we wont have stream yet
    } else //once we have the stream we can load it's title etc. 
        return <div>{this.props.stream.title}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] }; //select stream we are trying to edit, need props to give us props

}

export default connect(mapStateToProps, {fetchStream} )(StreamEdit);