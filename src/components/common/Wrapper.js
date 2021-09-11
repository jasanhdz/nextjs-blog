import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: ${({ maxWidth }) => maxWidth || '1000px'};
  @media screen and (min-width: 1280px) {
    padding: 0 24px 0 24px;
  }
`

function Wrapper({ children, maxWidth, className }) {
  return (
    <WrapperStyled className={className} maxWidth={maxWidth}>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper