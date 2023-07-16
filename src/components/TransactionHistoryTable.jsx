import TransactionHistory from './TransactionHistory';

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
                    <tr>
                      <TransactionHistory
                  key={item.id}
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                      />
                    </tr>
              ))}
        </tbody>
    </table>
  );
}