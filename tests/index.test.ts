import { miatch } from '../src/index'

describe('Base test', () => {
  it('should be a string v1', () => {
    const { AMAZE }: any = miatch()
    expect(AMAZE).toBe('AMAZE')
  })

  it('should be a string v2', () => {
    const IM: any = miatch()
    expect(IM.AMAZE).toBe('AMAZE')
  })

  it('should be empty', () => {
    const empty: Object = miatch()
    expect(Object.keys(empty).length).toBe(0)
  })

  it('should be formatted', () => {
    const toLower = (value: any) => value.toString().toLowerCase()
    const { AMAZE }: any = miatch({ format: toLower })
    expect(AMAZE).toBe(toLower('AMAZE'))
  })
})
