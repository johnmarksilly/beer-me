import { render, screen } from '@testing-library/react'
import Method from './Method'

describe('<Method />', () => {
    it('Renders layout.', () => {
      render(<Method />)
  })

  it('Has no content.', async () => {
    render(<Method />)
    expect(await screen.queryByText('Mash Temperature')).toBeNull()
    expect(await screen.queryByText('Fermentation Temperature')).toBeNull()
  })
  
  it('Has temperature cards.', async () => {
    const testMash = {
      temp: {
        duration: 10,
        unit: 'fahrenheit',
        value: '128'
      }
    }

    const testFermentation = {
      temp: {
        duration: 20,
        unit: 'fahrenheit',
        value: '100'
      }
    }
    
    render(<Method mash={testMash} fermentation={testFermentation} />)
    expect(await screen.findByText('Mash Temperature')).not.toBeNull()
    expect(await screen.findByText('Fermentation Temperature')).not.toBeNull()
  })
})