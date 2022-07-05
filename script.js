const form = document.querySelector('#equation-form')
const input = document.querySelector('#equation')
const results = document.querySelector('#results')
const errorDiv = document.querySelector('.error')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = input.value
  const regex = /[0-9\+\-\*\/\)\(]/g
  const found = value.match(regex)
  if (!found) {
    errorDiv.textContent = 'Please enter a valid math equation.'
  }
  const finalEquation = found.join('')
  const answer = eval(finalEquation)
  results.textContent = answer
  errorDiv.textContent = ''
  
})

