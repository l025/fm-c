export default function Empty() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center text-center">
        <img
          className="max-w-44"
          src="/mortgage-repayment-calculator/assets/images/illustration-empty.svg"
          alt="empty"
        />
        <h2 className="text-lg font-semibold">Results shown here</h2>
        <p className="text-neutral-300 text-sm font-light">
          Complete the form and click &quot;calculate repayments&quot; to see
          what your mounthly repayments would be.
        </p>
      </div>
    </>
  )
}
