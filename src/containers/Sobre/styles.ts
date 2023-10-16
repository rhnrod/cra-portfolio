import { styled } from 'styled-components'

export const GithubSecao = styled.div`
  margin: 32px 0 64px;
  img {
    height: 157px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 300px;
    }
  }
`
