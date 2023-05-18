// import PropTypes from 'prop-types';

import { THead } from "./TransactionHistory.styled";

export default function TransactionHistoryHead({th1, th2, th3 }) {
  return (
    <THead>
      <tr>
        <th>{th1}</th>
        <th>{th2}</th>
        <th>{th3}</th>
      </tr>
    </THead>
  );
}
