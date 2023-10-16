import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto de Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
  </Card>
)

export default Projeto
