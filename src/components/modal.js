import React, {Component} from 'react';
import '../assets/css/modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    handleConfirm () {
        this.props.callback();
        this.setState({
            visible: false
        });
    }
    render() {
        const button = <button onClick={() => this.setState({visible:true})} className={this.props.className ? this.props.className : 'btn'}>
            {this.props.children ? this.props.children : 'Click Me'}
        </button>;
        if (this.state.visible) {
            return (
                <span>
                    {button}
                    <div className="confirm-modal">
                        <div className="card modal-content col s6">
                            <div className="card-content">
                                {this.props.text}
                            </div>
                            <div className="card-action">
                                <button onClick={this.handleConfirm} className="btn red">Confirm</button>
                                <button onClick={ () => this.setState({visible:false})} className="btn blue">Cancel</button>
                            </div>
                        </div>
                    </div>
                </span>
            );
        }
        return(
            button
        );
    }
}

export default Modal;