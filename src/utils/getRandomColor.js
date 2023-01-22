import colors from '../data/colors.js'

let index = 0

export const getRandomColor = () => {
  if (index === colors.length) {
    index = 0
  }
  return colors[index++]
}
