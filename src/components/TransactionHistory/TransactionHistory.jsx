import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (<table className={css.table}>
  <thead className={css.table_title}>
    <tr>
      <th className={css.table_title_th}>Type</th>
      <th className={css.table_title_th}>Amount</th>
      <th className={css.table_title_th}>Currency</th>
    </tr>
  </thead>
        {items.map(item => {
    return (<tbody className={css.table_row} key={item.id}>
    <tr key={item.id} className={css.table_tr}>
            <td className={ css.table_td_type }>{item.type } </td>
      <td className={css.table_td}>{item.amount} </td>
      <td className={css.table_td}>{item.currency} </td>
    </tr>
  </tbody>)
})}
  
</table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}