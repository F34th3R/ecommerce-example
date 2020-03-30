import React from 'react'
import { LandingContainer, LandingMain } from './style/LandingPageStyled'
import { Typography, Box } from '@material-ui/core'
import { Sidebar } from '../../layout/Sidebar/Sidebar'
import { useSidebarValues } from '../../../context/SidebarContext'

export const LandingPage = () => {
  const { priceSelected, contrySelected } = useSidebarValues()
  console.table(contrySelected)
  console.table(priceSelected)
  return (
    <LandingContainer>
      <Sidebar />
      <LandingMain>
        <Typography variant="h5" gutterBottom align="center">
          Let's Travel Anywhere
        </Typography>
        <Box height="20px" />
      </LandingMain>
    </LandingContainer>
  )
}
