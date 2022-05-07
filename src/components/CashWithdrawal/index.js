import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onClickDenom = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {denominationsList} = this.props

    return (
      <div className="bg-cont">
        <div className="card-cont">
          <div className="name-cont">
            <div className="circle-cont">
              <p className="alpha">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="bal-cont">
            <p className="your-bal">Your Balance</p>
            <div className="amount-cont">
              <p className="amount">{amount}</p>
              <p className="in-rup">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-cont">
            <p className="with-draw">Withdraw</p>
          </div>
          <p className="choose">Choose Sum (In Rupees)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                onClickDenom={this.onClickDenom}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
