import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main>
                <section>
                    <form action="submit">
                        <label for="title" class="title">Title:</label>
                        <input type="text" name="title" value="" placeholder="Trip to France"></input>
                        <label for="date" class="date">Entry Date:</label>
                        <input type="date" name="date" value=""></input>
                        <label htmlFor="newEntry">Add an Entry</label>
                        <textarea type="text" name="newEntry" id="newEntry"  rows="10" cols="50" maxlength="380"/>
                        <button>Log Entry</button>
                    </form>
                    <div className="preview">
                        <h2></h2>
                        <p></p>
                    </div>
                </section>
                
                <section className="tableau">
                <h2>Pin Your Entry</h2>
                    
                </section>
            </main>
        )
    }
}

export default Main;
