import MenuItem from './Components/MenuItem';

function App() {
    let socialLinks = ['fab fa-instagram', 'fab fa-youtube', 'fab fa-whatsapp'];
    let standartIcons = ['fas fa-plus', 'fas fa-home', 'fas fa-cog'];

    return (
        <div className="nav-bar">
            <div className="more">
                <div className="social-links">
                    {
                        socialLinks.map((classValue, key) => <MenuItem key={key} classValue={classValue} />)
                    }
                </div>
                <i className="fas fa-plus"></i>
            </div>
        </div>
    );
}

export default App;