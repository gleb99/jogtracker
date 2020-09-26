import { createContext, useContext } from 'react'

export const StoreContext = createContext()

export const useMyContext = () => useContext(StoreContext)
