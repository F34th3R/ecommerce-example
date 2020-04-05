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

export const LandingBodyContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
`

export const LandingMain = styled.div`
  display: flex;
  flex-flow: column;
`
