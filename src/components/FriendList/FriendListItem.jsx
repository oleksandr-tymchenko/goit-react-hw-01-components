import { FaCircle } from "react-icons/fa";
import PropTypes from 'prop-types';

import { Item, Card} from './FriendList.styled';


export default function FriendListItem({ avatarUrl, userName, status }) {

    return (
        
      <Card>
        <Item eventType={status}>
            <FaCircle/>
            
            <img className="avatar" src={avatarUrl} alt={userName} width="48" />
            <p className="name">{userName}</p>
          </Item>
        
    </Card>
    )
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};