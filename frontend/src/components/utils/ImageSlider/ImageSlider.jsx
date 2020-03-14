import React from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'

import { SERVER_URL } from '../../../constans/API.routes'

const ImageContainer = styled.img`
  width: 100%;
  max-height: 150px;
`
export const ImageSlider = ({ images }) => {
  return (
    <>
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <ImageContainer src={`${SERVER_URL}/${image}`} alt="productImage" />
          </div>
        ))}
      </Carousel>
    </>
  )
}
