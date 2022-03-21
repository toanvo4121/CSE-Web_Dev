const calculate = () => {
  let firstOp = parseInt(document.getElementById("first-operand").value)
  let secondOp = parseInt(document.getElementById("second-operand").value)
  if (!firstOp || !secondOp) {
    createToast('Please input operands !!!')
    return
  }
  let result = document.getElementById("result")
  let operator = document.getElementById("operator").value
  let result_text = ""
  switch (operator) {
    case "add":
      result_text = firstOp.toString() + " + " + secondOp.toString() + " = " + (firstOp + secondOp).toString()
      break
    case "sub":
      result_text = firstOp.toString() + " - " + secondOp.toString() + " = " + (firstOp - secondOp).toString()
      break
    case "mul":
      result_text = firstOp.toString() + " * " + secondOp.toString() + " = " + (firstOp * secondOp).toString()
      break
    case "div":
      result_text = firstOp.toString() + " / " + secondOp.toString() + " = " + (firstOp / secondOp).toString()
      break
    case "exp":
      result_text = firstOp.toString() + " ^ " + secondOp.toString() + " = " + (firstOp ** secondOp).toString()
      break
    default:
      createToast('Please select an operator')
      return
  }
  result.innerHTML = result_text
}

const createToast = (msg) => {
  let toast_msg = document.getElementById('toast-msg')
  toast_msg.innerHTML = msg
  let myAlert = document.querySelector('.toast')
  let bsAlert = new bootstrap.Toast(myAlert)
  bsAlert.show()
}