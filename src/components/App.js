import React from 'react';
import {Router, Route, Link} from 'react-router-dom'; 

//Import all stream pages
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import history from '../history';

//import header file
import Header from './Header';



const App = () => {
    return (
    <div className="ui container">
        
        <Router history={history}>
        <Header /> {/* import header on all pages*/ }
            <div>
                <Route path="/" exact component={StreamList} /> {/* the home path*/}
                <Route path="/streams/new" exact component={StreamCreate} /> 
                <Route path="/streams/edit/:id" exact component={StreamEdit} /> {/*Always go to streams/edit/stream id*/}
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
        </Router>
    </div>
    // if you write exact like above its like exact ={true}
    // exact will mean, does it exactly match the path 
    );

};

export default App;