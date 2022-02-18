import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home page', () => {
  it('should render correctly', () => {
    render(<Home />)

    screen.getByText('Atur')
  })
})
