import React from 'react';
import {connect} from 'react-redux'; 
import {createStream} from '../../actions'; //action creator
import StreamForm from './streamForm';


class StreamCreate extends React.Component {

    //passed down as prop to StreamForm
   onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues); //call create stream action creator -> api request -> to create stream
    }

    render() {
       // console.log(this.props); 
        return (
           <div>
               <h3>
                   Create a Stream
               </h3>
               <StreamForm onSubmit={this.onSubmit}/>
           </div>
        );
    };
}


export default connect(null, {createStream})(StreamCreate); //easily use connect with form