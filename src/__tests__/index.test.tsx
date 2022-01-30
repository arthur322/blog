import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home page', () => {
  it('should render correctly', () => {
    render(<Home />)

    screen.getByRole('heading', { name: 'Atur' })
    const link = screen.getByRole('link', { name: 'Atur' })
    expect(link.getAttribute('href')).toBe('https://github.com/arthur322')
  })
})
