import React from 'react'
import { LandingContainer, LandingMain } from './style/LandingPageStyled'
import { Typography, Box } from '@material-ui/core'
import { Sidebar } from '../../layout/Sidebar/Sidebar'
import { useSidebarValues } from '../../../context/SidebarContext'
import { useAxios } from '../../../hooks/useAxios'

export const LandingPage = () => {
  const { priceSelected, contrySelected } = useSidebarValues()

  const [{ data, loading }, refetch] = useAxios({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  })

  return (
    <LandingContainer>
      <Sidebar />
      <LandingMain>
        <Typography variant="h5" gutterBottom align="center">
          Let's Travel Anywhere
        </Typography>
        <Box height="20px" />
        <Box height="50px" />
        <Typography gutterBottom align="center" onClick={() => refetch(true)}>
          No post yet...!
        </Typography>
        {/* {JSON.stringify(data)} */}
        {loading ? 'loading...' : JSON.stringify(data)}
      </LandingMain>
    </LandingContainer>
  )
}
