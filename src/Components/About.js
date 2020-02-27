import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {


    return (
        <div className="container">
            <h4 className="center"> About Page</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident autem possimus earum qui a dolorum, eveniet atque ipsam exercitationem vel quos rem neque temporibus corrupti!</p>

        </div>
    );
};

export default Rainbow(About);