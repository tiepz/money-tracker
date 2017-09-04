import { connect } from 'react-redux'
import TransactionForm from '../../../components/TransactionForm'
import {
  getAccountsCurrencyMap,
  getAccountsAsOptions
} from '../../../selectors/entities/accounts'
import { getTagOptions } from '../../../selectors/entities/tags'
import { saveTransaction } from '../../../actions/transactions'
import { loadExpenseTags } from '../../../actions/tags'
import {
  changeAccount,
  changeAmount,
  changeCurrency,
  addExpenseTag,
  changeExpenseTags,
  changeDate,
  changeNote
} from '../../../actions/ui/transactionForm'

const mapStateToProps = state => ({
  form: state.ui.transactionForm,
  label: 'From',
  buttonLabel: 'Add Expense',
  currencyMap: getAccountsCurrencyMap(state),
  accountOptions: getAccountsAsOptions(state),
  tagsOptions: getTagOptions(state)
})

export default connect(mapStateToProps, {
  changeAccount,
  changeAmount,
  changeCurrency,
  changeDate,
  changeNote,
  addTag: addExpenseTag,
  changeTags: changeExpenseTags,
  loadTagsOptions: loadExpenseTags,
  saveTransaction
})(TransactionForm)
