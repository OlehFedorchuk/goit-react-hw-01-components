export default function TransactionHistory({ id, type, amount, currency }) {
    return (
        <>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{ currency }</td>
       </>
  );
}