import React from 'react';

const Pics = ({title, thumbnailUrl}) => {
    return (
        <div>
            <img src={thumbnailUrl} alt={title} />
        </div>
    );
}

export default Pics;
