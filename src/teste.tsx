import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) =>
    props.principal ? 'greenyellow' : 'orangered'};
  padding: 8px;
  font-size: ${(props) => props.fontSize || '24px'};
  font-weight: bold;
`

const BotaoPerigo = styled(Botao)`
  color: #fff;
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Hello, Styled Components!</Botao>
      <Botao fontSize="36px">Hello, Styled Components!</Botao>
      <BotaoPerigo fontSize="44px">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
