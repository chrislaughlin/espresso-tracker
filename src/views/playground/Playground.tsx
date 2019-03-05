import React, {Component} from 'react';
import firebase from '../../firebase';

class Playground extends Component {
    state = {
        data: []
    };

    componentDidMount(): void {
        const itemsRef = firebase.database().ref('playgroundItems');
        itemsRef.on('value', snapshot => {
            // @ts-ignore
            let items = snapshot.val() || {};
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    data: items[item]
                })
            }
            this.setState({data: newState});
        })
    }

    addItem = () => {
        const itemsRef = firebase.database().ref('playgroundItems');
        const item = {
            title: `test ${Math.random()}`
        };

        itemsRef.push(item);
    };

    deleteItem = (id:string) => {
        const itemRef = firebase.database().ref(`/playgroundItems/${id}`);
        itemRef.remove();
    };

    render(): React.ReactNode {
        return (
            <div>
                <span>ITEMS</span>
                <b onClick={this.addItem}>ADD ITEM</b>
                <ul>
                    {this.state.data.map((item:any) => {
                        return (
                            <li>
                                {JSON.stringify(item)}
                                <b onClick={() => this.deleteItem(item.id)}>DELETE</b>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
};


export default Playground;

