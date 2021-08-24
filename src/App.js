import {createRef} from 'react';
import MenuItem from './Components/MenuItem';
import './App.css';

function App() {
    let socialLinks = ['fab fa-instagram', 'fab fa-youtube', 'fab fa-whatsapp'];
    let refMore = createRef();

    let changeActive = () => {
        refMore.current.classList.toggle('active');
    }

    return (
        <div className="nav-bar">
            <div className="more" ref={refMore} onClick={changeActive}>
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