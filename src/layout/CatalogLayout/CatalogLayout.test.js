import { render } from '@testing-library/react'
import * as api from '../../services/PunkAPI'
import CatalogLayout from './CatalogLayout'

test('Test Catalog loads data', () => {
  const getData = async () => Promise.resolve([])
  const mockGetBeers = jest.fn(getData)
  api.getBeers = mockGetBeers
  
  expect(mockGetBeers).not.toHaveBeenCalled()
  render(<CatalogLayout />)
  expect(mockGetBeers).toHaveBeenCalledTimes(1)
})