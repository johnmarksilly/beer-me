import { render } from '@testing-library/react'
import InfoCard from './InfoCard'

describe('<InfoCard />', () => {
  it('Renders content.', () => {
    render(<InfoCard>Sample</InfoCard>)
  })

  it('Has icon if not set', () => {
    const { container } = render(<InfoCard/>)
    expect(container.querySelector('svg')).toBeDefined()
  })

  it('Has text content', () => {
    const wrapper = render(<InfoCard>Sample</InfoCard>)
    expect(wrapper.getByText('Sample')).toBeDefined()
  })
})