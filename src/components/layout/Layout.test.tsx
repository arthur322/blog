import { render, screen } from '@testing-library/react'
import Layout from './Layout'

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: any) => {
    return <>{children}</>
  },
}))

describe('Component: Layout', () => {
  // Should work :cry:
  it.skip('must render meta tags correctly', async () => {
    render(
      <Layout>
        <div />
      </Layout>,
      { container: document.head }
    )

    expect(document.title).toBe('Atur Lima')
  })

  it('must render with default props correctly', async () => {
    render(
      <Layout>
        <h1>My heading</h1>
      </Layout>
    )

    screen.getByRole('heading', { name: 'My heading' })
  })
})
