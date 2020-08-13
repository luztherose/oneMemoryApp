import React, { Component } from 'react';
import firebase from './firebase';
import Tableau from './Tableau';
class Main extends Component {
    constructor() {
        super();

        this.state = {
            entryComment: "",
            entryDate: "",
            entryTitle: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
    }

    render() {
        return (
            <main>
            <section className="wrapper description">
                <p>
                oneMemory is an app that allows users to share their most treasured souvenirs with the world. Fill out the form, and let's your most precious memory live forever!
                </p>
            </section>
                <section className="firstSection wrapper">
                    <form action="submit">

                        <label htmlFor="date" className="date">Entry Date:</label>
                        <input onChange={this.handleChange} type="date" name="entryDate"/>

                        <label htmlFor="title" className="title">Title:</label>
                        <input onChange={this.handleChange} type="text" name="entryTitle" placeholder="Trip to France" />

                        <label htmlFor="newEntry"></label>
                        <textarea onChange={this.handleChange} type="text" name="entryComment" id="newEntry" rows="5" cols="40" maxLength="380" placeholder="Type out your Souvenir" />

                        <button onClick={this.handleClick}>Log Entry</button>

                    </form>
                    <div className="preview">
                        <p>{this.state.entryDate}</p>
                        <h3> {this.state.entryTitle}</h3>
                        <p> {this.state.entryComment}</p>
                    </div>
                </section>

                <section className="tableau">
                    <h2>Pin Your Entry</h2>
                    <Tableau />
                </section>
            </main>
        )
    }
}

export default Main;
