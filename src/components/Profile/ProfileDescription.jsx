import PropTypes from "prop-types";

import { Card, Par, ParWrap, ImgWrap  } from './Profile.styled';


export default function ProfileDescription(props) {
    const { avatar, username, tag, location } = props;
    return (
        <Card>
            <ImgWrap>
                <img
                src={avatar}
                alt={username}
                className="avatar" 
            />
            </ImgWrap>
            
            <ParWrap>
                <Par className="name">{username}</Par>
                <Par className="tag">{tag}</Par>
                <Par className="location">{location}</Par>
            </ParWrap>
        </Card>
   )

}
    
ProfileDescription.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
};