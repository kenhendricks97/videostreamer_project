import React from 'react';
import {Field,reduxForm} from 'redux-form'; 



class StreamCreate extends React.Component {
    //helper method
    renderInput(formProps) {
        console.log(formProps)
        return <input 
        onChange={formProps.input.onChange} 
        value={formProps.input.value}
        />
        
    }

    render() {
       // console.log(this.props); 
        return (
            <form>
                <Field name="Title" component={this.renderInput}/> 
                <Field name= "Description" component={this.renderInput}/>
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);