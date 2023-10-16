import { styled } from 'styled-components'
import Titulo from '../../components/Titulo'

const Avatar = styled.img`
  border-radius: 50%;
`
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`

const Sidebar = () => (
  <Aside>
    <Avatar src="https://github.com/rhnrod.png" />
    <Titulo fontSize={20}>Rhuan Emanuel</Titulo>
  </Aside>
)

export default Sidebar
