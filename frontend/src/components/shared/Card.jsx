import styled from 'styled-components'

export const Card = styled.div`
  width: ${p => p.width || '100%'};
  box-shadow: ${p => p.theme.c.shadow.main};
`
