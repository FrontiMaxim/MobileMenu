import {createRef} from 'react';
import {useDispatch} from 'react-redux';
import {changeActive} from './actions';
import MenuItem from './Components/MenuItem';
import './App.css';

function App() {
    let socialLinks = ['fab fa-instagram', 'fab fa-youtube', 'fab fa-whatsapp'];
    let refMore = createRef();

    let dispatch = useDispatch();

    let setActive = () => {
        refMore.current.classList.toggle('active');
        dispatch(changeActive());
    }

    return (
        <div className="nav-bar">
            <div className="more" ref={refMore} onClick={setActive}>
                <div className="social-links">
                    {
                        socialLinks.map((classValue, key) => <MenuItem key={key} classValue={classValue} />)
                    }
                </div>
                <i className="fas fa-plus"></i>
            </div>
            <nav>
                <div className="nav-item"><i className="fas fa-home"></i></div>
                <div className="nav-item"><i className="fas fa-cog"></i></div>
            </nav>
        </div>
    );
}

export default App;