const form = document.querySelector("form")
const addNewItem = document.getElementById("addNewItem")
const itensWrapper = document.getElementById("buttons-wrapper")
const alertRemoved = document.getElementById("alertbox")
const closeAlert = document.querySelector(".alert-close")





form.addEventListener("submit", (e) => {
  e.preventDefault()
  const shoppingItem = document.createElement("label")

  const regex = /[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g
  const itemWithRegex = addNewItem.value.replace(regex, '').trim()
  if (itemWithRegex.trim() === "") {
    alert("Digite o item corretamente!!")
    return
  }

  shoppingItem.className = "shopping-item"
  const checkboxItem = document.createElement("input")
  checkboxItem.type = "checkbox"
  const itemName = document.createElement("span")
  const removeItem = document.createElement("button")
  removeItem.type = "button"
  itemName.textContent = `${itemWithRegex}`
  itensWrapper.append(shoppingItem)
  shoppingItem.append(checkboxItem, itemName, removeItem)
  addNewItem.value = ""

})

itensWrapper.addEventListener("click", (e) => {
  const btnRemove = e.target.closest("button")
  if (!btnRemove) return
  btnRemove.closest(".shopping-item").remove()
  alertRemoved.style.display = "flex"

})

closeAlert.addEventListener("click", () => {
  alertRemoved.style.display = "none"
})


