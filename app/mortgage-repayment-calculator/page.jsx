'use client'

import { Plus_Jakarta_Sans } from 'next/font/google'
import './style.css'
import { useEffect, useState } from 'react'
import Empty from './components/empty'
import Result from './components/result'
import {
  validateAmount,
  validateTerm,
  validateRate,
  validateType,
} from './components/validators.js'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Mortgage() {
  const [form, setForm] = useState({
    amount: '',
    term: '',
    rate: '',
    type: '',
  })
  const [errors, setErrors] = useState({
    amount: undefined,
    term: undefined,
    rate: undefined,
    type: undefined,
  })
  const [result, setResult] = useState({
    monthly: null,
    total: null,
  })

  function clearAll() {
    setForm({
      amount: '',
      term: '',
      rate: '',
      type: '',
    })
    setErrors({
      amount: undefined,
      term: undefined,
      rate: undefined,
      type: undefined,
    })

    setResult({
      monthly: null,
      total: null,
    })
  }

  function validateForm() {
    setErrors({
      amount: validateAmount(form.amount),
      term: validateTerm(form.term),
      rate: validateRate(form.rate),
      type: validateType(form.type),
    })

    return (
      errors.amount === undefined &&
      errors.term === undefined &&
      errors.rate === undefined &&
      errors.type === undefined
    )
  }

  function formatNumber(n) {
    return n.toLocaleString(undefined, { minimumFractionDigits: 2 })
  }
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (validateForm()) {
      let monthly_payment
      const num_payments = form.term * 12
      if (form.type === 'repayment') {
        const denominator = (1 + form.rate) * num_payments - 1
        monthly_payment = (form.amount * form.rate) / denominator

        console.log(denominator)
      } else {
        monthly_payment = form.amount * form.rate
      }

      setResult({
        monthly: monthly_payment,
        total: monthly_payment * num_payments,
      })
      console.log({
        monthly: monthly_payment,
        total: monthly_payment * num_payments,
      })
    }
  }

  return (
    <>
      <main
        className={
          plusJakartaSans.className +
          ' flex justify-center items-center min-h-screen bg-neutral-100'
        }>
        <section className="flex flex-col lg:flex-row w-full md:max-w-md xl:max-w-[850px] bg-white md:rounded-2xl lg:m-2 overflow-hidden shadow-lg">
          <div className="flex-1 flex flex-col gap-3 px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
              <h1 className="text-xl text-neutral-900 font-semibold">
                Mortgage Calculator
              </h1>
              <button
                className="text-neutral-500 text-sm underline"
                onClick={clearAll}>
                Clear All
              </button>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div
                className={
                  'form-control ' +
                  (errors.amount !== undefined ? 'invalid' : '')
                }>
                <label htmlFor="amount">Mortgage Amount</label>
                <div className="input-wr group !pl-10">
                  <span className="prefix">£</span>
                  <input
                    type="text"
                    name="amount"
                    value={form.amount.toLocaleString()}
                    onChange={handleChange}
                    autoFocus
                  />
                </div>
                <p className="error-msg">{errors.amount}</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div
                  className={
                    'form-control ' +
                    (errors.term !== undefined ? 'invalid' : '')
                  }>
                  <label htmlFor="mortgage-term">Mortgage Term</label>
                  <div className="input-wr group !pr-16">
                    <span className="postfix">years</span>
                    <input
                      type="text"
                      id="mortgage-term"
                      name="term"
                      value={form.term}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-msg">{errors.term}</p>
                </div>
                <div
                  className={
                    'form-control ' +
                    (errors.rate !== undefined ? 'invalid' : '')
                  }>
                  <label htmlFor="interst-rate">Interst Rate</label>
                  <div className="input-wr group !pr-10">
                    <span className="postfix">%</span>
                    <input
                      type="text"
                      id="interst-rate"
                      name="rate"
                      value={form.rate}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-msg">{errors.rate}</p>
                </div>
              </div>

              <div
                className={
                  'form-control radio' +
                  (errors.type !== undefined ? 'invalid' : '')
                }>
                <label>Mortgage Type</label>
                <label className="input-wr radio group" htmlFor="repayment">
                  <input
                    type="radio"
                    name="type"
                    value="repayment"
                    id="repayment"
                    checked={form.type === 'repayment'}
                    onChange={handleChange}
                  />
                  <span>Repayment</span>
                </label>
                <label className="input-wr radio group" htmlFor="interest_only">
                  <input
                    type="radio"
                    name="type"
                    value="interest_only"
                    id="interest_only"
                    checked={form.type === 'interest_only'}
                    onChange={handleChange}
                  />
                  <span>Interest Only</span>
                </label>
                <p className="error-msg">{errors.type}</p>
              </div>

              <button
                type="submit"
                className="self-start flex gap-2 items-center px-6 py-2 bg-primary hover:bg-primary/50 text-neutral-900 rounded-3xl transition-colors">
                <img
                  className="max-w-5"
                  src="/mortgage-repayment-calculator/assets/images/icon-calculator.svg"
                  alt="calc"
                />
                <span className="font-medium">Calculate Repayments</span>
              </button>
            </form>
          </div>

          <div className="flex-1 flex justify-center items-center bg-neutral-900/90 text-white xl:rounded-bl-[12%] px-8 py-8">
            {result.monthly ? <Result result={result} /> : <Empty />}
          </div>
        </section>
      </main>
    </>
  )
}
