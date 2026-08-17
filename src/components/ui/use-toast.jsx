"use client"

import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case actionTypes.DISMISS_TOAST:
      const { toastId } = action
      // ! Side effect ! - This will be executed in a separate render cycle
      if (toastId) {
        return {
          ...state,
          toasts: state.toasts.map((t) => (t.id === toastId ? { ...t, open: false } : t)),
        }
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => ({ ...t, open: false })),
      }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
    default:
      throw new Error()
  }
}

const ToastContext = React.createContext(undefined)

const ToastProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] })

  React.useEffect(() => {
    state.toasts.forEach((toast) => {
      if (toast.open === false) {
        setTimeout(() => {
          dispatch({ type: actionTypes.REMOVE_TOAST, toastId: toast.id })
        }, TOAST_REMOVE_DELAY)
      }
    })
  }, [state.toasts])

  const addToast = React.useCallback((toast) => {
    const id = genId()
    dispatch({ type: actionTypes.ADD_TOAST, toast: { ...toast, id, open: true } })
    return {
      id: id,
      dismiss: () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id }),
    }
  }, [])

  const updateToast = React.useCallback((toast) => {
    dispatch({ type: actionTypes.UPDATE_TOAST, toast })
  }, [])

  const dismissToast = React.useCallback((toastId) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId })
  }, [])

  const removeAllToasts = React.useCallback(() => {
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId: undefined })
  }, [])

  const value = React.useMemo(
    () => ({
      toasts: state.toasts,
      toast: addToast,
      updateToast,
      dismissToast,
      removeAllToasts,
    }),
    [state.toasts, addToast, updateToast, dismissToast, removeAllToasts],
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

function useToast() {
  const context = React.useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}

export { ToastProvider, useToast }
