import { screen, render } from '@testing-library/react'
import SETTINGS from '@/config/settings'
import { Header } from '.'

describe('<Header />', () => {
  it('must render site title and all the links', () => {
    render(<Header />)

    screen.getByText('Atur')

    SETTINGS.headerLinks.forEach((link) => {
      const linkEl = screen.getByRole('link', { name: link.label })
      expect(linkEl).toHaveAttribute('href', link.url)
    })
  })
})
