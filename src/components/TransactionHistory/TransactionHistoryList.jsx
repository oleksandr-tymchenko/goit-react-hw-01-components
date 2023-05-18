import PropTypes from 'prop-types';

export default function TransactionHistoryList({ TrType, TrAmount, TrCurrency }) {
    return (
    <tbody>
        <tr>
        <td>{TrType}</td>
        <td>{TrAmount}</td>
        <td>{TrCurrency}</td>
        </tr>
     </tbody>
    )    
}

TransactionHistoryList.propTypes = {
    TrType: PropTypes.string,
    TrAmount: PropTypes.string,
    TrCurrency: PropTypes.string,
    
};