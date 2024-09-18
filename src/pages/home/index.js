import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/posts/postSlice';
import Posts from '../../components/posts';
import { statusSlice } from '../../constants';
import { fetchDeletePosts } from '../../features/posts/deleteSlice';
import { fetchEditPosts } from '../../features/posts/updateSlice';
import AboutCard from '../../components/aboutCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const dispatch = useDispatch();
    const { posts = [], status } = useSelector(({ posts }) => posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    const handleDelete = (id) => dispatch(fetchDeletePosts(id));
    const handleEdit = (data = {}) => dispatch(fetchEditPosts(data));

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    {status === statusSlice.STATUS.LOADING && 'loading...'}
                    {status === statusSlice.STATUS.SUCCESS ?
                        posts.map((item) => <Posts key={item.id}{...item} handleDelete={handleDelete} handleEdit={handleEdit} />) : null
                    }
                    {/* <button onClick={handlePhotoBtn}>Move to Photo</button> */}
                </div>
                <div className='col-4'>
                    <AboutCard />
                    <div className='readMoreBox text-align-center'>
                        <a href="/users">Users</a>
                    </div>
                </div>
            </div>
            <div className='positionArrow text-align-center align-content-center borderRadius_Half'>
                <span>
                    <FontAwesomeIcon icon={faArrowUp} />
                </span>
            </div>
        </div>
    );
}

export default Home;
