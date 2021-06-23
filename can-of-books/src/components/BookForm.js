import React, { Component } from 'react';


export class BookForm extends Component {
    render() {
        return (
            <div>
                <form >
                    <label for='bookName'>Add a book</label>

                    <input type='text' id='bookName' placeholder='Name of the book' />
                    <input type='text' id='bookDescription' placeholder='Description of the book' />
            

                    <input type='submit' value='Add'/>
                </form>
            </div>
        )
    }
}

export default BookForm;