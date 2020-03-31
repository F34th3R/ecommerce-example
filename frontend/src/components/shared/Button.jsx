import styled from 'styled-components'

export const Button = styled.button`
  width: ${p => (p.fullWidth ? '100%' : '')};
  height: 38px;
  padding: 0px 20px;
  border: none;
  border-radius: 6px;
  background: ${p =>
    p.disabled ? p.theme.disable.main : p.theme.primary.main};
  color: ${p => (p.disabled ? p.theme.disable.text : p.theme.primary.text)};
  cursor: pointer;
  &:hover {
    box-shadow: ${p => (p.disabled ? undefined : p.theme.c.shadow.main)};
  }
`
