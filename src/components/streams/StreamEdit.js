import _ from 'lodash'; //can help us pick out values that we want
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions'; //action creators
import StreamForm from './streamForm';


//class based component 
class StreamEdit extends React.Component  {
    componentDidMount(){ 
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
    console.log(this.props);
    if(!this.props.stream) {

        return <div>Loading Please Wait</div> //if its the first render, we wont have stream yet
    
    } else //once we have the stream we can load it's title etc. 
        return (
            <div>
                <h3>
                    Edit a Stream
                </h3>
                <StreamForm initialValues={_.pick(this.props.stream,'title','description')} //passes down initial values from prop
                 onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] }; //select stream we are trying to edit, need props to give us props

}

export default connect(mapStateToProps, {fetchStream, editStream} )(StreamEdit);