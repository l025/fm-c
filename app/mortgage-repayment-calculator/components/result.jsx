export default function Result({ result }) {
  function format(n) {
    return n.toLocaleString(undefined, { minimumFractionDigits: 2 })
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Your results</h3>
        <p className="text-neutral-300 text-sm font-light">
          Your results are shiwn below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>

        <div className="flex flex-col gap-2 border-t-4 border-primary rounded-md p-6 my-5 bg-neutral-900">
          <p className="text-neutral-300 text-sm font-light">
            Your monthly repayments
          </p>
          <strong className="text-[3rem] text-primary font-bold">
            £ {format(result.monthly)}
          </strong>
          <hr className="border-neutral-700 my-3" />
          <p className="text-neutral-300 text-sm font-light">
            Total you'll repay over the term
          </p>

          <strong className="text-lg font-bold text-white">
            £ {format(result.total)}
          </strong>
        </div>
      </div>
    </>
  )
}
