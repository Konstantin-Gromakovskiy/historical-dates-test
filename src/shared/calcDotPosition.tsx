export default (angleDeg: number, radius: number, offsetAngle = 0) => {
  return ({
    x: radius + radius * Math.cos(((angleDeg + offsetAngle) * Math.PI) / 180),
    y: radius + radius * Math.sin(((angleDeg + offsetAngle) * Math.PI) / 180),
  })
}
