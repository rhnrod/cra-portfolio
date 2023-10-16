import { styled } from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  /* color: ${(props) => (props.color ? '#282a35' : '#000')}; */
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
`
