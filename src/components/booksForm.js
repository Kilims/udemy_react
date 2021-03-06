"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBook, deleteBook} from '../actions/booksActions';

class BooksForm extends React.Component{

    onDelete(){
        let bookId = findDOMNode(this.refs.delete).value;

        this.props.deleteBook(bookId);
    }

    handleSubmit(){
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }]

        this.props.postBook(book);
    }

    render(){

        const booksList = this.props.books.map(function(booksArr){
            return (
                <option key={booksArr._id}>{booksArr._id}</option>
            )
        })
        return(
            <Well>
                <Panel>
                    <FormGroup controlId="title" >
                        <ControlLabel>Title</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter title"
                            ref="title" />
                    </FormGroup>
                    <FormGroup controlId="description" >
                        <ControlLabel>Description</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter description"
                            ref="description" />
                    </FormGroup>
                    <FormGroup controlId="price" >
                        <ControlLabel>Price</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter price"
                            ref="price" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Buy now</Button>
                </Panel>
                <Panel style={{marginTop:'25px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book id to delete</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            {booksList}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.onDelete.bind(this)}  bsStyle="danger">Delete book</Button>
                </Panel>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postBook,
        deleteBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);