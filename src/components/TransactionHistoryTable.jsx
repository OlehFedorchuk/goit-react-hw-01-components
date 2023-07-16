import TransactionHistory from './TransactionHistory';
import PropTypes from "prop-types";
export default function TransactionHistoryTable({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
          </thead>  
          
          <tbody>
              
              {items.map(item => (
                
                 <TransactionHistory
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                 />
                  
              ))}
        </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  
}