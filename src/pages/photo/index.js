import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../../features/photos/photoSlice';
import Pics from '../../components/photo';
import { useNavigate } from 'react-router-dom';

const Photo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const photos = useSelector(({ photoReducer: { photo } }) => photo);

    useEffect(() => {
        dispatch(fetchPhoto(1))
    }, []);

    // 'user=rk&email=abc.com&password=234234'

    return (
        <>
            <div className='row overflowYScroll height150'>
                {
                    photos.map((item) => <Pics key={item.id}{...item} />)
                }
            </div>
            <button onClick={() => navigate('/')}>Back to post</button>
        </>
    );
}

export default Photo;

