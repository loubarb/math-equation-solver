const form = document.querySelector('#equation-form')
const input = document.querySelector('#equation')
const solveButton = document.querySelector('button')
const results = document.querySelector('#results')

form.addEventListener('keyup', (e) => {
  const value = e.key
  const regex = /[0-9\+\-\*\/\^\)\(]/g
  const found = value.match(regex)
  let equation = []
  
  if (!found) return

  if (found) {
    equation.push(input.value)
  }

  const finalEquation = equation.join('')
  console.log(finalEquation)

  return finalEquation
  
})

solveButton.addEventListener('click', (e) => {
  e.preventDefault()

})