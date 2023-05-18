import PropTypes from 'prop-types';
import data from './data.json'

import { List } from "components/GeneralStyles/GeneralStyled";
import { Item } from './Statistics.styled';


export default function StatisticList () {
    return (
        <List >
            {data.map(({id, label, percentage}) => (

            <Item key= {id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </Item>
            ))}
        </List>
    )
}

StatisticList.propTypes = {
  
    data: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
  
};