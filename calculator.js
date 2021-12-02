const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayValue = display.textContent
    const { previousKeyType } = calculator.dataset

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      calculator.dataset.operator = action
      calculator.dataset.firstNumber = displayValue
      display.textContent = '0'
    }

    if (action === 'clear') {
      display.textContent = '0'
      calculator.dataset.operator = '0'
      calculator.dataset.firstNumber = '0'
      calculator.dataset.secondNumber = '0'
    }
    if (action === 'calculate') {
      const firstNumber = calculator.dataset.firstNumber
      const operator = calculator.dataset.operator
      const secondNumber = displayValue
      display.textContent = calculate(firstNumber, operator, secondNumber)
    }

    if (!action) {
      if (displayValue === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayValue + keyContent
      }
    }

    if (action === 'decimal') {
      display.textContent = displayValue + '.'
    }
  }
})

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)

  if (operator === 'add') return firstNumber + secondNumber
  if (operator === 'subtract') return firstNumber - secondNumber
  if (operator === 'multiply') return firstNumber * secondNumber
  if (operator === 'divide') return firstNumber / secondNumber
}
