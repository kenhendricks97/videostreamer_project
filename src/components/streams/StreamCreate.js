import React from 'react';
import {Field,reduxForm} from 'redux-form'; 



class StreamCreate extends React.Component {
    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error} </div>
                </div>
            );
        }
    }



    //helper method
    renderInput = ({input, label, meta}) => {
        return (
            <div className="field">
                <label>{label} </label>
                <input {...input} autoComplete="off"/> {/* turns of auto complete in the entry bar */}
                <div>{meta.error}</div>
                {this.renderError(meta)}
            </div>
            );
    }

    //helper method
   onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
       // console.log(this.props); 
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="Title" component={this.renderInput} label="Enter Title"/> 
                <Field name= "Description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

//validating entries in form
const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        //only ran if the user did not enter the title
        errors.title = 'Please enter title';
    }

    //if user didnt give description
    if(!formValues.description){
        errors.description = 'Please enter description'
    }

    //return the error messages
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate: validate //pass into redux form helper - can be just validate cause of same name
})(StreamCreate);