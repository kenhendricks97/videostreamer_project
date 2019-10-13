import React from 'react';
import {connect } from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

/*const StreamList = () => {
    return <div>StreamList</div>

};*/

//use class based component as we only want to call the list once every time it loads
class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    //will dictate if edit and delete buttons show
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <button className="ui button negative"> 
                        Delete
                    </button>
                </div>
            );
        }
    }

    //render list on screen
    renderList(){
        return this.props.streams.map(stream => {
           return ( 
               
            <div class="ui list">
                <div className="item" key={stream.id} >  
                    {this.renderAdmin(stream)} {/*pass in current stream - need to call here*/ }
                    <i class="large middle aligned icon camera" /> 
                    <div className="content"> 
                        {stream.title}                       
                        <div className="description">{stream.description}</div>
                    </div>
                    
                </div>
            </div>
                
            );
        });
    }

    //show create stream button if user is signed in
    renderCreate() {
        if(this.props.isSignedIn) {
            // need to show link
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }
    


    render() {
        
        return (
        <div>
           <h2> Streams</h2> 
           <div className="ui celled list">{this.renderList()}</div>
           <div className="ui celled list">{this.renderCreate()}</div>
        </div>
        

         );
    }
}

const mapStateToProps = (state) => {
    //turns values inside object into array
    return {streams: Object.values(state.streams),
            currentUserId: state.auth.userId,
            isSignedIn: state.auth.isSignedIn
        
    }; 

}

export default connect(mapStateToProps,{fetchStreams})(StreamList);