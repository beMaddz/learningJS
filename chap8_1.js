function MultiplicatorUnitFailure () {}

function primitiveMultiply (a, b) {
  if (Math.random() < 0.5) {
    return a * b
  }
  else
    throw new MultiplicatorUnitFailure()
}

function reliableMultiply (a, b) {
  for (;;) {
    try {
      console.log(primitiveMultiply(a, b))
      break
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e
      }
    }
  }
}

reliableMultiply(8, 8)
