const monthList = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
let monthClicked = -1
const dayOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const addDay = () => {
  let months = document.getElementById("month")
  if (months.length === 1) {
    let day = document.getElementById("day")
    if (day.length > 1) {
      return
    }
    for (let i = 1; i <= 31; i++) {
      let dayOptions = document.createElement("option")
      dayOptions.text = i
      dayOptions.value = i
      day.appendChild(dayOptions)
    }
  }
  else {
    let month = parseInt(months.options[months.selectedIndex].value)
    if (month !== monthClicked) {
      monthClicked = month
      let day = document.getElementById("day")
      day.innerHTML = ""
      let max_day = dayOfMonths[month - 1]

      for (let i = 1; i <= max_day; i++) {
        let option = document.createElement("option")
        option.text = i
        option.value = i
        day.appendChild(option)
      }
    }
  }
}

const addMonth = () => {
  let month = document.getElementById("month")
  if (month.length > 1) {
    return
  }
  for (let i = 0; i < monthList.length; i++) {
    let options = document.createElement("option")
    options.value = i + 1
    options.text = monthList[i]
    month.appendChild(options)
  }
}

const addYear = () => {
  let year = document.getElementById("year")
  if (year.length > 1) {
    return
  }
  for (let i = 2022; i > 1900; i--) {
    let options = document.createElement("option")
    options.value = i
    options.text = i
    year.appendChild(options)
  }
}

const handleName = (name) => {
  if (name.length >= 2 && name.length <= 30) return true
  else {
    alert("Please enter a string of characters for Name between 2 and 30 characters !!!")
    return false
  }
}

const handleEmail = (email) => {
  if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return true
  else {
    alert("Please enter a valid email address: <sth>@<sth>.<sth>")
    return false
  }
}

const handlePassword = (password) => {
  if (password.length >= 2 && password.length <= 30) return true
  else {
    alert("Please enter a string of characters for Password between 2 and 30 characters !!!")
    return false
  }
}

const submit = () => {
  let first_name = document.getElementById("first-name").value
  let last_name = document.getElementById("last-name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let day = document.getElementById("day")
  let month = document.getElementById("month")
  let year = document.getElementById("year")
  let gender = document.getElementsByName("gender")
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gender = gender[i].value
      break
    }
  }
  let country = document.getElementById("country")
  country = country.options[country.selectedIndex].text
  let about = document.getElementById("about").value

  if (day.selectedIndex !== -1) {
    day = day.options[day.selectedIndex].value
  }
  else {
    day = 0
  }
  if (month.selectedIndex !== -1) {
    month = month.options[month.selectedIndex].value
  }
  else {
    month = 0
  }
  if (year.selectedIndex !== -1) {
    year = year.options[year.selectedIndex].value
  }
  else {
    year = 0
  }

  if (first_name && last_name && email && password && day && month && year && gender && country && about && handleName(first_name) && handleName(last_name) && handleEmail(email) && handlePassword(password))
    alert("Complete!")
  else
    alert("Vui lòng nhập đầy đủ thông tin!")
}

const reset = () => {
  document.getElementById("first-name").value = null
  document.getElementById("last-name").value = null
  document.getElementById("email").value = null
  document.getElementById("password").value = null
  let day = document.getElementById("day")
  let month = document.getElementById("month")
  let year = document.getElementById("year")
  let gender = document.getElementsByName("gender")
  document.getElementById("country").selectedIndex = 0
  document.getElementById("about").value = ""

  if (day.selectedIndex !== -1) {
    day.innerHTML = ""
  }
  if (month.selectedIndex !== -1) {
    month.innerHTML = ""
  }
  if (year.selectedIndex !== -1) {
    year.innerHTML = ""
  }
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gender[i].checked = false
      break
    }
  }
}