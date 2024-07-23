import image_logo from './images/image_icon.png'
import music_logo from './images/music_icon.png'
import quote_logo from './images/quotes_logo.png'

export default function NavBar(){
    return(
            <div className="navBar-icon">
            <nav>
            <img src={image_logo} width='80' height='80'/>
            <img src={music_logo} width='65' height='65'/>
            <img src={quote_logo} width='65' height='65'/>
            </nav>
            
            </div>
    );
}


