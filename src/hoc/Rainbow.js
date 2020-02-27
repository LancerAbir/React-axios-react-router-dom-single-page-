import React from 'react';

const Rainbow = (WrapperComponent) => {

    const colors = ['red', 'pink', 'blue', 'yellow', 'green'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const classBase = randomColor + '-text';

    return (props) => {

        return (
            <div className={classBase}>
                <WrapperComponent {...props} />
            </div>
        );
    }

};

export default Rainbow;