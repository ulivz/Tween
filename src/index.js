import _ from './tween'
import { isFunction, isNumber, isString, toMillisecond } from './util'

export const Tween = _

/**
 * Start a animation with tweening function.
 * @param from
 * @param to
 * @param duration
 * @param easing
 * @param callback
 * @returns {*}
 */
export function animate(from, to, duration, easing, callback) {
  if (!isNumber(from) || !isNumber(to)) {
    if (window.console) {
      console.error('Expect "from" and "to" are numeric.')
    }
    return 0
  }

  const options = {
    duration: 300,
    easing: 'Linear',
    callback: function () {
    }
  }

  const setOptions = function (obj) {
    if (isFunction(obj)) {
      options.callback = obj
    } else if (toMillisecond(obj) != -1) {
      options.duration = toMillisecond(obj)
    } else if (isString(obj)) {
      options.easing = obj
    }
  }
  setOptions(duration)
  setOptions(easing)
  setOptions(callback)

  /**
   * Compatibility Processing of Request Animation Frame
   */
  if (!window.requestAnimationFrame) {
    requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17)
    }
  }
  if (!window.cancelAnimationFrame) {
    cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }

  let start = 0
  let cursor = null
  const steps = Math.ceil(options.duration / 17)

  // Resolve Animation Algorithm
  let animtionAlgorithm
  if (isFunction(options.easing)) {
    animtionAlgorithm = options.easing
  } else if (isString(options.easing)) {
    const easing = options.easing.slice(0, 1).toUpperCase() + options.easing.slice(1)
    const arrKeyTween = easing.split('.')
    if (arrKeyTween.length == 1) {
      animtionAlgorithm = Tween[arrKeyTween[0]]
    } else if (arrKeyTween.length == 2) {
      animtionAlgorithm = Tween[arrKeyTween[0]] && Tween[arrKeyTween[0]][arrKeyTween[1]]
    }
  }

  if (isFunction(animtionAlgorithm) == false) {
    console.error(`Cannot resolve animation algorithm from "${options.easing}"`)
    return
  }

  const step = function () {
    // Current postion
    const value = animtionAlgorithm(start, from, to - from, steps)

    start++
    if (start <= steps) {
      options.callback(value)
      cursor = requestAnimationFrame(step)
    } else {
      // Finished animation.
      options.callback(to, true)
    }
  }
  // Start animating ...
  step()

  return function () {
    return steps
  }
}
