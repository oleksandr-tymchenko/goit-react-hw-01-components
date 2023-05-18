import PropTypes from "prop-types";

import { CardWrap, Img, ImgWrap  } from './Profile.styled';


export default function ProfileDescription(props) {
    const { avatar, username, tag, location } = props;
    return (
          
            <CardWrap>
                <ImgWrap>
                    <Img
                    src={avatar}
                    alt={username}
                        
                    
                    />
                </ImgWrap>

                
            
            
            {/* <ParWrap> */}
                <h2 className="name">{username}</h2>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
                {/* </ParWrap> */}
            </CardWrap>
       
   )

}
    
ProfileDescription.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
};