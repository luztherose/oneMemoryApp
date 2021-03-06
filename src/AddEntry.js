import React, { Component } from 'react';
import firebase from './firebase';

class AddEntry extends Component {
    state = {
        comment: "",
        date: "",
        title: "",
        signature: ""
    }

    getPreviewContainerClassName = () => {
        let className = ""
        if(this.state.comment || this.state.date || this.state.title  || this.state.signature) {
            className = "preview"
        }else{
            className = "hidden"
        }
        return className
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);

        this.setState({
            comment: "",
            date: "",
            title: "",
            signature: ""
        })
    }

    render() {
        return (
            <div>
            <section className="wrapper description">
                <p>
                oneMemory is an app that allows users to share their most treasured souvenirs with the world. Fill out the form, and let your most precious memory live forever in <span className="characters">380</span> characters!
                </p>
            </section>
                <section className="formSection wrapper">
                    <form action="submit" onSubmit={this.handleFormSubmit}>

                        <label htmlFor="date">Entry Date:</label>
                        <input onChange={this.handleChange}  value={ this.state.date } type="date" name="date" required /><br/>

                        <label htmlFor="title">Title:</label>
                        <input onChange={this.handleChange} value={ this.state.title } type="text" name="title" placeholder="Trip to France" required/><br/>

                        <label htmlFor="sign">Signature:</label>
                        <input onChange={this.handleChange}  value={ this.state.signature } type="text" name="signature" required  placeholder="John S." /><br/>

                        <label htmlFor="newEntry"></label>
                        <textarea onChange={this.handleChange} value={ this.state.comment } type="text" name="comment" id="newEntry" rows="5" cols="40" maxLength="380" placeholder="Type out your Souvenir" required/>

                        <button type="submit">Log Entry</button>
                    </form>
                    
                    <div className={this.getPreviewContainerClassName()}>
                        <h2>Preview</h2>
                        <div className="userEntry">
                            <p>{this.state.date}</p>
                            <h3> {this.state.title}</h3>
                            <p> {this.state.comment}</p>
                            <p>{this.state.signature} </p>
                        </div>
                    </div>
                </section>

                
            </div>
        )
    }
}

export default AddEntry;
