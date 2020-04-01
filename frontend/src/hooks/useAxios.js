import { useEffect, useState, useCallback } from 'react'
import Axios from 'axios'

export const useAxios = axiosData => {
  const [refetch, setRefetch] = useState(true)
  const [state, setState] = useState({
    data: null,
    loading: refetch ? true : false,
    error: false
  })

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, axiosData: prev.axiosData, loading: true }))
    try {
      const response = await Axios({
        url: axiosData.url,
        method: axiosData.method,
        data: axiosData.body
      })
      setState(prev => ({ ...prev, data: response.data, loading: false }))
    } catch (err) {
      setState(prev => ({ ...prev, error: err, loading: false }))
    }
    setRefetch(false)
  }, [axiosData.body, axiosData.method, axiosData.url])

  useEffect(() => {
    if (refetch) {
      fetchData()
    }
  }, [refetch, fetchData])

  return [state, setRefetch]
}
