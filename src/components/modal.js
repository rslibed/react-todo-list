import React, { Component } from 'react';
import '../assets/css/modal.css';

class Modal extends Component {

    render() {
        return(
            <div className="confirm-modal">
                        <div className="card modal-content col s6">
                            <div className="card-content">
                                <p>Are you sure you want to delete?</p>
                            </div>
                            <div className="card-action">
                                <button className="btn red">Delete</button>
                                <button className="btn blue">Cancel</button>
                            </div>
                        </div>
            </div>
        );
    }
}

export default Modal;