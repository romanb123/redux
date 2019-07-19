import React, { Component } from 'react';
import { connect } from 'react-redux';
class Counter extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>{this.props.state}</h1>
                <button type="button" onClick={this.props.minusfive} className="btn btn-primary" style={{ margin: "5px" }}>-5</button>
                <button type="button" onClick={this.props.plusfive} className="btn btn-primary" style={{ margin: "5px" }}>+5</button>
            </div>
        );
    }
}
let getReduxState = (state) => {
    return ({
        state: state.counter
    }

    )
}
let sendAction = (dispatch) => {
    return ({
        minusfive: () => {
            return (dispatch({
                type: "MINUS"
            }
            ))
        },
        plusfive: () => {
            return (dispatch({
                type: "PLUS"
            }
            ))
        }
    })


}


export default connect(getReduxState, sendAction)(Counter);