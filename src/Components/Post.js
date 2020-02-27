import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokeball from '../pokeball.png';

const Post = (props) => {

    const [state, setState] = useState({
        post: null
    })

    useEffect(() => {
        let id = props.match.params.post_id
        axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                setState({
                    post: res.data
                })


            })
    }, [])


    const post = state.post ? (
        <div className="potst">
            <img className="pokeball" src={Pokeball} alt="A Poke ball" />
            <h4 className="center blue-text"> {state.post.title} </h4>
            <p> {state.post.body} </p>
        </div>
    ) : (
            <div className="center"> Loading Post.... </div>
        )

    return (
        <div className="container">
            <h5 className="center"> Single Post Hear</h5>
            <div className="post card">
                <div className="card-content">
                    {post}
                </div>
            </div>
        </div>
    );
};

export default Post;