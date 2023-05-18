import PropTypes from 'prop-types';

import { TBody } from './TransactionHistory.styled';

export default function TransactionHistoryList({ TrType, TrAmount, TrCurrency }) {
    return (
    <TBody>
        <tr>
        <td>{TrType}</td>
        <td>{TrAmount}</td>
        <td>{TrCurrency}</td>
        </tr>
     </TBody>
    )    
}

TransactionHistoryList.propTypes = {
    TrType: PropTypes.string,
    TrAmount: PropTypes.string,
    TrCurrency: PropTypes.string,
    
};