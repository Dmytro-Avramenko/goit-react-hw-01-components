import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
       <table className={css.transaction_history}>
            <thead>
                <tr className={css.table_tipe}>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
                </tr>
            </thead>
             <tbody className={css.transaction_tbody}>
              {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.tran_tbody}>{item.type}</td>
                        <td className={css.tran_tbody}>{item.amount}</td>
                        <td className={css.tran_tbody}>{item.currency}</td>
                    </tr>  
                ))}              
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
 items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};