import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo
      consequuntur suscipit magnam maxime, porro dolores esse est sed eos
      excepturi, nostrum officiis doloremque illo obcaecati! Minus ipsam
      accusamus cum.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=rhnrod&show_icons=true&theme=aura_dark&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rhnrod&layout=compact&langs_count=7&theme=aura_dark" />
    </GithubSecao>
  </section>
)

export default Sobre
