import React, { Component } from 'react';
import firebase from './firebase';
import Tableau from './Tableau';
class Main extends Component {
    constructor() {
        super();

        this.state = {
            comment: "",
            date: "",
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

        this.setState({
            comment: "",
            date: "",
            title: ""
        })
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

                        <label htmlFor="date">Entry Date:</label>
                        <input onChange={this.handleChange}  value={ this.state.date } type="date" name="date" />

                        <label htmlFor="title">Title:</label>
                        <input onChange={this.handleChange} value={ this.state.title } type="text" name="title" placeholder="Trip to France" />

                        <label htmlFor="newEntry"></label>
                        <textarea onChange={this.handleChange} value={ this.state.comment } type="text" name="comment" id="newEntry" rows="5" cols="40" maxLength="380" placeholder="Type out your Souvenir" />

                        <button onClick={this.handleClick}>Log Entry</button>

                    </form>
                    <div className="preview">
                        <p>{this.state.date}</p>
                        <h3> {this.state.title}</h3>
                        <p> {this.state.comment}</p>
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
