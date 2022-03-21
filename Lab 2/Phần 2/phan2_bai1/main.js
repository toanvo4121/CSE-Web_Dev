const createTable = () => {
  let table_exist = document.getElementById('table-dest')
  if (!table_exist) {
    createToast('Table is already exists !!!')
  }
  else {
    let newTable = document.createElement('table')
    for (let i = 0; i < 2; i++) {
      let newRow = newTable.insertRow(i)
      for (let j = 0; j < 2; j++) {
        newRow.insertCell(j)
      }
    }
    newTable.setAttribute('id', 'table')
    newTable.setAttribute('class', 'table table-bordered border-dark')
    document.getElementById('table-container').innerHTML = ''
    document.getElementById('table-container').appendChild(newTable)
  }
}

const addRow = () => {
  let table = document.getElementById('table')
  if (!table) {
    createToast('There is no table, create a new one !!!')
  }
  else {
    let column = document.getElementById('table').rows[0].cells.length
    let row = table.insertRow()
    for (let i = 0; i < column; i++) {
      row.insertCell(i)
    }
  }
}

const addColumn = () => {
  let table = document.getElementById('table')
  if (!table) {
    createToast('There is no table, create a new one !!!')
  }
  else {
    let rows = document.getElementById('table').tBodies[0].rows.length
    let row = document.getElementById('table').tBodies[0].rows
    for (let i = 0; i < rows; i++) {
      row[i] = row[i].insertCell()
    }
  }
}

const removeRow = () => {
  let table = document.getElementById('table')
  if (table) {
    let row_index = document.getElementById('numberOfRow').value
    if (row_index) {
      let rows = table.tBodies[0].rows.length
      if (row_index > rows || row_index < 1) {
        createToast('Please input correct row index to delete !!!')
      }
      else {
        row_index--
        table.deleteRow(row_index)
      }
    }
    else {
      createToast('Please input correct row index to delete !!!')
    }
  }
  else {
    createToast('There is no table, create a new one !!!')
  }
}

const removeColumn = () => {
  let table = document.getElementById('table')
  if (table) {
    let column_index = document.getElementById('numberOfColumn').value
    if (column_index) {
      let cols = table.rows[0].cells.length
      if (column_index > cols || column_index < 1) {
        createToast('Please input correct column index to delete !!!')
      }
      else {
        column_index--
        let rows = table.tBodies[0].rows
        let length = rows.length
        for (let i = 0; i < length; i++) {
          rows[i].deleteCell(column_index)
        }
      }
    }
    else {
      createToast('Please input correct column index to delete !!!')
    }
  }
  else {
    createToast('There is no table, create a new one !!!')
  }
}

const deleteTable = () => {
  let table = document.getElementById('table')
  if (table) {
    container = document.getElementById('table-container')
    container.removeChild(table)
    let text = document.createElement('div')
    text.innerHTML = 'Create table here...'
    text.setAttribute('id', 'table-dest')
    container.appendChild(text)
  }
  else {
    createToast('There is no table, create a new one !!!')
  }
}

const createToast = (msg) => {
  let toast_msg = document.getElementById('toast-msg')
  toast_msg.innerHTML = msg
  let myAlert = document.querySelector('.toast')
  let bsAlert = new bootstrap.Toast(myAlert)
  bsAlert.show()
}