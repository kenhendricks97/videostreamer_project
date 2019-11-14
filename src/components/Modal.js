import React from 'react';
import ReactDOM from 'react-dom';


//return value of portal is creating portal
const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active"> {/* specific from semantic ui - this row is background*/}
            <div onClick={(e) =>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content"> {props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>, //need to reference the element, here it is body, to render modal under (look at diagram)
            document.querySelector('#modal')

    );
};

export default Modal;

