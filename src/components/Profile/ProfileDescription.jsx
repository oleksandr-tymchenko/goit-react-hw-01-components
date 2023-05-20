import PropTypes from "prop-types";

import { CardWrap, Img, ImgWrap  } from './Profile.styled';


export default function ProfileDescription({ avatar, username, tag, location }) {

    return (
          
            <CardWrap>
                <ImgWrap>
                    <Img
                    src={avatar}
                    alt={username}
                        
                    
                    />
                </ImgWrap>
                <h2 className="name">{username}</h2>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>

            </CardWrap>
   )
}
    
ProfileDescription.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};