import React, {Component} from 'react';
import ListItem from './list_item';

class ListContainer extends Component {
    render () {
        console.log("Data: ", this.props.list);
        const list = this.props.list.map((item,index) => {
            console.log("ITEM: ", item);
            return <ListItem key={index} item={item} delete={this.props.delete} complete={this.props.toggleComplete}/>
        });
        return(
            <div>
                <ul className="collection">
                    {list.length ? list : <li className="collection-item center-align">There is nothing to do!</li>}
                </ul>
            </div>
        );
    }
}

export default ListContainer;

