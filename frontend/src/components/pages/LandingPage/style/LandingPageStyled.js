import styled from 'styled-components'

export const LandingContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row;
  width: 100%;
  div:first-child {
    width: 230px;
    margin-right: 20px;
    display: flex;
    flex-flow: column;
  }
  div:last-child {
    width: 100%;
  }
`

export const LandingMain = styled.div`
  display: flex;
  flex-flow: column;
`
