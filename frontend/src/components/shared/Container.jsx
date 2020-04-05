import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.c.container.w};
  margin: 0 auto;
  padding: 0 ${p => p.theme.c.padding};
  position: relative;
`
