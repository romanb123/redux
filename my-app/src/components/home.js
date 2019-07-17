import React, { Component } from 'react';
import { connect } from 'react-redux'

class Ajaxcall extends React.Component {


    render() {
        console.log(this.props.posts);
        var newposts = [...this.props.posts]
        var tt = newposts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
        return (
            tt
        )
    }
}

const takeposts = (state) => {
    return state;

}
export default connect(takeposts)(Ajaxcall);