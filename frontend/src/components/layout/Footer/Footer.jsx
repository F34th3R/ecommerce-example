import React from 'react'
import styled from 'styled-components'

import { SmileOutlined } from '@ant-design/icons'

const FooterContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Happy Coding <SmileOutlined />
      </p>
    </FooterContainer>
  )
}
