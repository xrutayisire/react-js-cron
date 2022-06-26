import { renderHook, act } from '@testing-library/react-hooks'
import { useState } from 'react'

import { Classes, Locale } from './types'
import { classNames, dedup, range, setError, sort, usePrevious } from './utils'

describe('utils range function test suite', () => {
  const testCases = [
    {
      start: 1,
      end: 10,
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      start: 0,
      end: 3,
      result: [0, 1, 2, 3],
    },
  ]

  testCases.forEach(({ start, end, result }) => {
    it(`should create a valid range from ${start} to ${end}`, () => {
      expect(range(start, end)).toEqual(result)
    })
  })
})

describe('utils sort function test suite', () => {
  const testCases = [
    {
      array: [8, 5, 3, 1, 2, 10, 7, 4, 9, 6],
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      array: [1, 0, 2],
      result: [0, 1, 2],
    },
    {
      array: [1, 5, 3, 4, 5, 1, 2, 2, 5],
      result: [1, 1, 2, 2, 3, 4, 5, 5, 5],
    },
  ]

  testCases.forEach(({ array, result }) => {
    it(`should sort an array of ${array.length} items`, () => {
      expect(sort(array)).toEqual(result)
    })
  })
})

describe('utils dedup function test suite', () => {
  const testCases = [
    {
      array: [8, 5, 3, 1, 2, 10, 7, 4, 9, 6],
      result: [8, 5, 3, 1, 2, 10, 7, 4, 9, 6],
    },
    {
      array: [1, 0, 2, 0],
      result: [1, 0, 2],
    },
    {
      array: [1, 5, 3, 4, 5, 1, 2, 2, 5],
      result: [1, 5, 3, 4, 2],
    },
    {
      array: [1, 1, 1],
      result: [1],
    },
    {
      array: [1, 2, 2, 4, 4],
      result: [1, 2, 4],
    },
  ]

  testCases.forEach(({ array, result }) => {
    it(`should remove duplicate of an array of ${array.length} items`, () => {
      expect(dedup(array)).toEqual(result)
    })
  })
})

describe('utils classNames function test suite', () => {
  const testCases: {
    className: Classes
    result: string
  }[] = [
    {
      className: {
        titi: true,
      },
      result: 'titi',
    },
    {
      className: {
        titi: true,
        toto: false,
        tutu: true,
      },
      result: 'titi tutu',
    },
    {
      className: {
        titi: false,
        toto: false,
      },
      result: '',
    },
    {
      className: {
        titi: true,
        toto: true,
        tutu: true,
      },
      result: 'titi toto tutu',
    },
  ]

  testCases.forEach(({ className, result }) => {
    it(`should check CSS class for ${result}`, () => {
      expect(classNames(className)).toEqual(result)
    })
  })
})

describe('utils setError function test suite', () => {
  it(`should call onError function with custom locale`, () => {
    const locale: Locale = {
      errorInvalidCron: 'error displayed!',
    }
    const onError = jest.fn()

    setError(onError, locale)

    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({
      type: 'invalid_cron',
      description: 'error displayed!',
    })
  })

  it(`should not call onError function with custom locale`, () => {
    const locale: Locale = {
      errorInvalidCron: 'error displayed!',
    }
    const onError = jest.fn()

    setError(undefined, locale)

    expect(onError).not.toHaveBeenCalled()
  })

  it(`should call onError function with default locale`, () => {
    const locale: Locale = {}
    const onError = jest.fn()

    setError(onError, locale)

    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith({
      type: 'invalid_cron',
      description: 'Invalid cron expression',
    })
  })
})

describe('utils usePrevious function test suite', () => {
  it(`should return the previous value when updating value`, () => {
    const useTestHook = () => {
      const [value, setValue] = useState(77)
      const prevValue = usePrevious(value)
      return { value, setValue, prevValue }
    }

    const { result } = renderHook(() => useTestHook())

    expect(result.current.prevValue).toBe(77)
    expect(result.current.value).toBe(77)

    act(() => {
      result.current.setValue(33)
    })

    expect(result.current.prevValue).toBe(77)
    expect(result.current.value).toBe(33)
  })
})
