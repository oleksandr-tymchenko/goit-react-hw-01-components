import PropTypes from 'prop-types';
import data from './data.json'


export default function StatisticList () {
    return (
        <ul className="stat-list">
            {data.map(({id, label, percentage}) => (

            <li key= {id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
            ))}
        </ul>
    )
}

StatisticList.propTypes = {
  
    data: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
  
};