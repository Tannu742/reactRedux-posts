import React from 'react';
import img from '../../assets/img/img.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { Link } from 'react-router-dom';

const Posts = ({ title, body, handleDelete, leftCol='',rightCol='', id, handleEdit }) => {
    // console.log(id, title, body);
    return (
        <div className='homePost row'>
            <div className={`col-5 ${leftCol}`}>
                <img className='object_fitCover borderRadius_5' width={300} height={300} src={img} alt="img" />
            </div>
            <div className={`col-5 ${rightCol}`}>
                <h2>{title}</h2>
                <p>{body}</p>
                <div className='row readMoreBox justify-content-spaceBetween align-items-center'>
                    <Link to={`/posts/${id}`}>Read More</Link>
                    <span> <FontAwesomeIcon icon={faBookOpen} /> 1 min read</span>
                </div>
            </div>
            {/* <button onClick={() => handleDelete(id)}>Delete</button> */}
            {/* <button onClick={() => handleEdit({id, title, body})}>update</button> */}
        </div>
    );
}

export default Posts;
