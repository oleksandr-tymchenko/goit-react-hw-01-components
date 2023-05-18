import PropTypes from 'prop-types';
import TransactionHistoryList from './TransactionHistoryList';
import TransactionHistoryHead from './TransactionHistoryHead';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <TransactionHistoryHead th1="Type" th2="Amount" th3="Currency" />

      {items.map(({ id, type, amount, currency }) => {
        return (
          <TransactionHistoryList
            key={id}
            TrType={type}
            TrAmount={amount}
            TrCurrency={currency}
          />
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
