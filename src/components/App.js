import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';




const App = () => {
    return (
    <div> 
        <BrowserRouter>
            <div>
                <Route path="/" exact component={StreamList} /> {/* the home path*/}
                <Route path="/streams/new" exact component={StreamCreate} /> 
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
        </BrowserRouter>
    </div>
    // if you write exact like above its like exact ={true}
    // exact will mean, does it exactly match the path 
    );

};

export default App;