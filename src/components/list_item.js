import React from 'react';
import Modal from './modal';

export default props => {
    const { complete } = props.item;
    const listStyle = {
        textDecoration: 'line-through',
        color: '#888'
    }
    const modalMessage = (
        <div>
            <h4>Are you sure you want to delete?</h4>
            <ul>
                <li>
                    {props.item.title}
                </li>
            </ul>
        </div>
    )
    return (
        <li className='collection-item row'>
            <div style={ complete ? listStyle: {}} className="col s10">
                {props.item.title}
            </div>
            <div className="col s3 right">
                <Modal callback={ () => props.delete(props.index)} text={modalMessage} className="btn btn-floating red">
                    <i className="material-icons">delete</i>
                </Modal>
                {/*<button onClick={() => props.delete(props.index)} className='btn-floating red darken-4'><i className="material-icons">delete</i></button>*/}
                <button onClick={() => props.complete(props.index)} className={`btn-floating ${complete ? 'yellow darken-1': 'green'}`}><i className="material-icons">{ complete ? 'undo' : 'check'}</i></button>
            </div>
        </li>
)
}