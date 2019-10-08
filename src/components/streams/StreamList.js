import React from 'react';
import {connect } from 'react-redux';
import {fetchStreams} from '../../actions';

/*const StreamList = () => {
    return <div>StreamList</div>

};*/

//use class based component as we only want to call the list once every time it loads
class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render(){
        return <div>StreamList</div>;
    }
}

export default connect(null,{fetchStreams})(StreamList);