import { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios'

const FetchedDataContextProvider = createContext()

export function FetchedDataWrapper ({ children }) {

  const [data, setData] = useState({})

  useEffect( () => {
    const fetching = async () => {
      try {
        const { data } = await axios.get(`${process.env.BACKEND_URL}/resume`)
        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetching()
  }, [])

  return (
    <FetchedDataContextProvider.Provider value={data}>
      { children }
    </FetchedDataContextProvider.Provider>
  )
}

export function useGridContext () {
  return useContext(FetchedDataContextProvider)
}
