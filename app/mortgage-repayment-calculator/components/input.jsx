export default function Input({ label }) {
  return (
    <>
      <div
        className={
          'input-control ' + (errors.amount !== null ? 'invalid' : '')
        }>
        <label htmlFor="amount">{label}</label>
        <div className="input-wr group">
          <span className="prefix">£</span>
          <input
            type="text"
            className="!pl-12"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
