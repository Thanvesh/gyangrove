import { FaAlignJustify,FaHeart,FaUser,FaSistrix} from "react-icons/fa6";
import Location from "../Location"
import './index.css'


const Header=(onSearch)=>(
    <div className="header-wrapper">
        <div className="logo">
            <h1 className="logo-text">BookUsNow</h1>
            <Location className="hidden-desktop"/>
        </div>

        <div className="search-favorite-user-conatiner">
            <div className="icon-container">
                <FaSistrix className="icon" />
            </div>
            <div className="icon-container">
                <FaHeart className="icon"/>
            </div>
            <div className="icon=-container">
                <FaUser className="icon"/>
            </div>
        </div>

        <div className="category-search-wrap">
            <div>
                <button type="button" className="desktop-category">
                    <FaAlignJustify />
                    Categories
                </button>
            </div>
            <div className="search-container">
                <input type="search" palceholder="DJI Phantom" className="input-search"/>
                <FaSistrix className="icon" />
            </div>
        </div>
        <div className="favorite-signin-wrap">
            <div className="favorite-wrapper">
                <FaHeart />
                <p>Favorites</p>
            </div>
            <div >
                <button type="button" className="signin-button">Sign In</button>
            </div>
        </div>
    </div>

)

export default Header