import styled from 'styled-components'

const mobileBreakpoint = '768px'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 6rem;
    line-height: 5rem;

    span {
      padding: 1.5rem 0.5rem;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1.5rem 0;
    width: 2.5rem;
  }
`
