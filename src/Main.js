import React, { Component } from 'react';
import Tableau from './Tableau';
class Main extends Component {
    constructor() {
        super();

        this.state = {
            entryDate: "",
            entryTitle: "",
            entryComment: ""
        }

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setSubmitButton = (event) => {
        event.preventDefault();
        console.log('Working')
    }

    render() {
        return (
            <main>
                <section className="firstSection wrapper">
                    <form action="submit">
                        <label htmlFor="date" className="date">Entry Date:</label>
                        <input onChange={this.handleChange} type="date" name="entryDate" ></input>
                        <label htmlFor="title" className="title">Title:</label>
                        <input onChange={this.handleChange} type="text" name="entryTitle" placeholder="Trip to France" />
                        <label htmlFor="newEntry">Add an Entry:</label>
                        <textarea onChange={this.handleChange} type="text" name="entryComment" id="newEntry" rows="7" cols="45" maxLength="380" placeholder="Type out your Souvenir" />
                        <button onClick={this.setSubmitButton}>Log Entry</button>
                    </form>
                    <div className="preview">
                        <p>{this.state.entryDate}</p>
                        <h2> {this.state.entryTitle}</h2>
                        <p> {this.state.entryComment}</p>
                    </div>
                </section>

                <section className="tableau">
                    <Tableau />
                </section>
            </main>
        )
    }
}

export default Main;
