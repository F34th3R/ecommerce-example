import React, { useState, useEffect } from 'react'
import { LandingContainer, LandingMain } from './style/LandingPageStyled'
import { LandingBody } from './sections'
import { Typography, Box, CircularProgress } from '@material-ui/core'
import { Sidebar } from '../../layout/Sidebar/Sidebar'
import { useSidebarValues } from '../../../context/SidebarContext'
import { useAxios } from '../../../hooks/useAxios'

export const LandingPage = () => {
  const { priceSelected, contrySelected } = useSidebarValues()

  const [products, setProducts] = useState()
  const [productSize, setProductSize] = useState(0)

  const [search, setSearch] = useState()
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(8)
  const [variables, setVariables] = useState({
    skip,
    limit
  })

  const [{ data, loading, error }, refetch] = useAxios({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    body: variables
  })

  // TODO: TEST 🧪
  useEffect(() => {
    if (data) {
      if (data.success) {
        if (variables.loadMore) {
          setProducts([...products, ...data.products])
          console.log('[...products, data.products]')
        } else {
          setProducts(data.products)
          console.log('data.products')
        }
        setProductSize(data.postSize)
        console.log('data.postSize')
      }
    }
  }, [data, products, variables.loadMore])

  const updateSearch = valueToSearch => {
    setSkip(0)
    setVariables({
      skip: 0,
      limit,
      filters: 0,
      searchTerm: valueToSearch
    })
    refetch(true)
  }

  const onLoadMore = () => {
    let newSkip = skip + limit
    setVariables({
      skip: newSkip,
      limit,
      loadMore: true
    })
    refetch(true)
    setSkip(newSkip)
  }

  return (
    <LandingContainer>
      <Sidebar updateSearch={updateSearch} />
      <LandingMain>
        <Typography variant="h5" gutterBottom align="center">
          Let's Travel Anywhere
        </Typography>

        <Box height="66px" />
        {loading && (
          <CircularProgress color="primary" style={{ margin: '0 auto' }} />
        )}
        {data ? (
          <LandingBody
            onLoadMore={onLoadMore}
            displaLoadMore={productSize >= limit}
          />
        ) : (
          !loading && (
            <Typography
              gutterBottom
              align="center"
              onClick={() => refetch(true)}
            >
              {!error ? 'No post yet...!' : 'Faild to fetch products'}
            </Typography>
          )
        )}
      </LandingMain>
    </LandingContainer>
  )
}
