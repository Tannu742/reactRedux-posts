import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePosts } from '../../features/posts/singleSlice';
import img from '../../assets/img/img.webp'
import decorLogo from '../../assets/img/decorationLogo.png'
import { useParams } from 'react-router-dom';
import Home from '../../pages/home';
import Posts from '../../components/posts';
import constants from '../../constants';
import { fetchPosts } from '../../features/posts/postSlice';

const SinglePost = () => {
    const dispatch = useDispatch();
    const singlePosts = useSelector(({ singlePostReducer: { post } }) => post);
    const allposts = useSelector(({ posts: { allposts } }) => allposts);
    const { posts } = useSelector(({ posts }) => posts);

    console.log(posts);
    const { postId } = useParams();

    useEffect(() => {
        dispatch(fetchSinglePosts(postId));
    }, [postId]);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    return (
        <div className='container'>
            <div className='singlePosts row marginTop_10p'>
                <div className='col-7 text-align-center'>
                    <img height={650} className='col-8' src={img} alt="img" />
                    <div className='singlePostsDes text-align-center'>
                        <h3>{singlePosts.title}</h3>
                        <p>{singlePosts.body}</p>
                    </div>
                </div>
                <div className='popularArticles col-3'>
                    <div className='popularArticlesName row align-items-center'>
                        <img height={20} src={decorLogo} alt="decorLogo" />
                        <h3>popular Articles</h3>
                    </div>
                    <div className='popularArticlesItems row'>
                        {
                            allposts.map((item) => <Posts key={item.id}{...item} leftCol='col-3' rightCol='col-7' />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;
