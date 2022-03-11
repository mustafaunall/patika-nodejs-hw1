const checkForNullOrEmpty = str => str == ""

const addItemToList = str => {
    let newItem = document.createElement('li')
    newItem.textContent = str
    document.getElementById('list').appendChild(newItem)
}

const getItemsFromStorage = () => JSON.parse(localStorage.getItem('items'))

const addItemToStorage = (item) => {
    localStorage.setItem('items', getItemsFromStorage() == null ? JSON.stringify([item]) : JSON.stringify([...getItemsFromStorage(), item]))
}

const initializeItems = () => {
    let storageItems = getItemsFromStorage()

    if (storageItems != null)
        storageItems.map(item => {
            var itemNode = document.createElement('li')
            itemNode.textContent = item
            document.getElementById('list').appendChild(itemNode)
    })
}

const newElement = () => {
    if (checkForNullOrEmpty(document.getElementById('task').value)){
        alert('Lütfen yazıyı boş girmeyiniz!')
    } else {
        let elementValue = document.getElementById('task').value
        addItemToList(elementValue)
        addItemToStorage(elementValue)
        document.getElementById('task').value = ''
    }
}

const clearElements = () => {
    localStorage.clear()
    document.getElementById('list').innerHTML = ''
}

(() => {
    initializeItems()
})()