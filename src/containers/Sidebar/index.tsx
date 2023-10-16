import { styled } from 'styled-components'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`

const Sidebar = () => (
  <Aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rhuan Emanuel</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        rhnrod
      </Paragrafo>{' '}
      <Descricao fontSize={12} tipo="principal">
        Desenvolvedor Full Stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </Aside>
)

export default Sidebar
