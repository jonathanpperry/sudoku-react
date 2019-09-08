import React, { Component } from 'react'

export default class SudokuBoard extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.sudoku)}
            </div>
        )
    }
}