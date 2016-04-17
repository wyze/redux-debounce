import { isFSA } from 'flux-standard-action'
import debounce from 'lodash.debounce'
import mapValues from 'lodash.mapvalues'

const debounceMiddleware = ( config = {} ) => () => next => {
  const debouncers = mapValues(config, option => {
    if ( typeof option === 'number' ) {
      return debounce(next, option)
    }

    const { wait = 0, ...options } = option

    return debounce(next, wait, options)
  })

  return action => {
    if ( !isFSA(action) ) {
      return next(action)
    }

    const { meta = {} } = action
    const debouncer = debouncers[meta.debounce]

    if ( debouncer ) {
      return debouncer(action)
    }

    return next(action)
  }
}

export default debounceMiddleware
