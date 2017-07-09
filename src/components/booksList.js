"use strict";
import React from 'react';
import { connect } from 'react-redux';


class BookList extends React.Component{
    render() {
        console.log('ACCESS data : ', this.props.books);
        return (
            <div>
                <h1>Hello React</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books.books
    }
}

export default connect(mapStateToProps)(BookList);