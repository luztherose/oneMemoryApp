import React, { Component } from 'react';
import firebase from './firebase';
class Tableau extends Component {

    constructor() {
        super();
        this.state = {
            entries: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const newEntries = [];

            for (let propName in data) {
                const entry = data[propName]
                entry.id = propName 

                newEntries.push(entry);
            }
            this.setState({
                entries: newEntries
            })
        })
    }
    render() {
        return (
            <div className="wrapper entriesSection">
                {
                    this.state.entries.map((entry) => {
                        return (
                            <div key={entry.id}>
                                <button className="removeEntry">✖</button>
                                <p> Date: { entry.entryDate }</p>
                                <h3>{ entry.entryTitle }</h3>
                                <p>{ entry.entryComment }</p>
                            </div>
                        )
                    })
                }
                
            </div >
        );
    }
}
export default Tableau;