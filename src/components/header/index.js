import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/img/logo.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import Modal from '../modal';
import { useDispatch, useSelector } from 'react-redux';
import { searchPosts } from '../../features/posts/postSlice';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const allposts = useSelector(({ posts: { allposts } }) => allposts);
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current && show) {
            inputRef.current.focus();
        }
    }, [show]);

    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            setShow(false);
            return;
        }
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            setShow(true);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    const handleSearchData = (e) => {
        e.preventDefault();
        dispatch(searchPosts({ serachQuery: inputRef.current?.value || '', mainData: allposts }));
        setShow(false)
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <NavLink to={'/'}>
                        <img className='mx-10' width={150} src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className='col-5 headerIcons row justify-content-right align-items-center'>
                        <Modal show={show} className='srchModal' handleClosePopUp={() => setShow(false)} title={'Press ESC to close'}>
                            <div className='srchChildren justify-content-center'>
                                <form onSubmit={handleSearchData} className='row srchChildren'>
                                    <input
                                        className='col-6'
                                        type="text"
                                        placeholder='type to start your search'
                                        ref={inputRef}
                                    />
                                    <input className='inputBtn' type="submit" value='search' />
                                </form>
                            </div>
                        </Modal>
                        <FontAwesomeIcon icon={faSearch} />
                        <h3 className='my-10' onClick={() => setShow(true)}>search</h3>
                        <span>subscribe</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
