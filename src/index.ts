interface MiatchOptions {
  format?: (value: string | number | symbol) => any
}

function __defaultFormatter(value: string | number | symbol): any {
  return value
}

/**
 * Simple constant generator, great with redux
 * @export
 * @example ```const { EXAMPLE } = miatch()```
 * @param {MiatchOptions} [options]
 * @returns {Object}
 */
export function miatch(options?: MiatchOptions): Record<string, any> {
  // eslint-disable-next-line prettier/prettier
  return new Proxy({}, {
      get(target, key): any {
        const formatter = options?.format || __defaultFormatter
        return formatter(key)
      }
    }
  )
}

export default miatch
