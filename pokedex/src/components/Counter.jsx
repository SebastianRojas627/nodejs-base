import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoading } from '../store/auth/authSlice'
import { login } from '../store/auth/authThunk'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(login())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(login())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}