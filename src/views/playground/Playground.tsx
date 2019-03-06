import React, {Component} from 'react';

import firebase from '../../firebase';
import { USER_KEY } from "../../consts/localStorageKeys";

class Playground extends Component {
    state = {
        data: []
    };

    userKey = window.localStorage.getItem(USER_KEY) || '';

    componentDidMount(): void {
        const itemsRef = firebase.database().ref(this.userKey);
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
        const itemsRef = firebase.database().ref(this.userKey);
        const item = {
            title: `test ${Math.random()}`
        };

        itemsRef.push(item);
    };

    deleteItem = (id:string) => {
        const itemRef = firebase.database().ref(`/${this.userKey}/${id}`);
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

