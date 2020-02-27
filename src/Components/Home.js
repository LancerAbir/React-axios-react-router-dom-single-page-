import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';


const Home = () => {

    const [state, setState] = useState({
        posts: []
    })

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }, [])

    const { posts } = state;
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img className="pokeball" src={Pokeball} alt="A Poke ball" />
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">
                                Title:  {post.title}
                            </span>
                        </Link>
                        <p> Body:  {post.body} </p>

                    </div>
                </div>
            )
        })
    ) : (
            <div className="center"> <h5> !! Sorry Dear No Posts Hear </h5> </div>
        )

    return (
        <div className="container">
            <h4 className="center"> Home Page</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident autem possimus earum qui a dolorum, eveniet atque ipsam exercitationem vel quos rem neque temporibus corrupti!</p>
            {postList}
        </div>
    )

}

export default Home;