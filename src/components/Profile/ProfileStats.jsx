import PropTypes from "prop-types";


import { Item, Label, ItemText  } from './Profile.styled';
import { List } from "components/GeneralStyles/GeneralStyled";


export default function ProfileStats({ followers, views, likes }) {
    // const  = props.stats;
    return (
      
            <List>
                <Item>
                    <Label >Followers </Label> 
                    <ItemText >{followers}</ItemText>
                </Item>
                <Item>
                    <Label >Views </Label>
                    <ItemText >{views}</ItemText>
                </Item>
                <Item>
                    <Label >Likes </Label>
                    <ItemText >{likes}</ItemText>
                </Item>
            </List>  
       
     
   )

}
    
ProfileStats.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    
};