// import PropTypes from 'prop-types';

export default function TransactionHistoryHead({th1, th2, th3 }) {
  return (
    <thead>
      <tr>
        <th>{th1}</th>
        <th>{th2}</th>
        <th>{th3}</th>
      </tr>
    </thead>
  );
}
