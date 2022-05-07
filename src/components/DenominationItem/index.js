import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onClickDenom} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    onClickDenom(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
