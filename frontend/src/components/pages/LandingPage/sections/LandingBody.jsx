import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { LandingBodyContainer } from '../style/LandingPageStyled'
import { Card } from '../../../shared'
import styled from 'styled-components'

const dataImages = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
  }
]

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: 240px;
  display: block;
  overflow: hidden;
`

export const LandingBody = () => {
  const [activeStep, setActiveStep] = useState()

  const handleNext = () => {
    setActiveStep(prev => prev + 1)
  }

  const handleBack = () => {
    setActiveStep(prev => prev - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }
  return (
    <LandingBodyContainer>
      {dataImages.map(({ label, imgPath }, index) => (
        <Card key="label">
          <Image src={imgPath} alt={label} />
        </Card>
      ))}
    </LandingBodyContainer>
  )
}
