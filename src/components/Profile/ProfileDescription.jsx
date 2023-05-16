import PropTypes from "prop-types";

export default function ProfileDescription(props) {
    const { avatar, username, tag, location } = props;
    return (
        <div className="description">
            <img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
   )

}
    
ProfileDescription.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
};