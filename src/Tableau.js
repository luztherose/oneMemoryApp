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

    deleteEntry = (entryId) => {
        if(window.confirm('Are sure you want to delete this entry? ❌ ')){
            const dbRef = firebase.database().ref();
            dbRef.child(entryId).remove();
            alert("Deleted ✅")
        }
    }

    render() {
        return (
            <div className="wrapper entriesSection">
                {
                    this.state.entries.map((entry) => {
                        return (
                            <div key={entry.id}>
                                <button onClick={ () => this.deleteEntry(entry.id) } className="removeEntry">✖</button>
                                <p> Date: {entry.date}</p>
                                <h3>{entry.title}</h3>
                                <p>{entry.comment}</p>
                            </div>
                        )
                    })
                }

            </div >
        );
    }
}
export default Tableau;