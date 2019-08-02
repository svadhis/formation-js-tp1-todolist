let todos = document.getElementById('todos');
let done = document.getElementById('done');

// SOLUTION 1 DIRECTEMENT SUR LES ELEMENTS DU DOM
function addItem() {
	// Récupérer la valeur contenue dans l'input 'item-value'
    let item = document.getElementById('item-value');

    // Générer l'id de l'item
	let itemId = todos.querySelectorAll('li').length;

    // Ajouter une nouvelle ligne dans la liste 'todos'
	todos.innerHTML += `<li id="${itemId}">${item.value} <button type="button" onClick="removeItem(${itemId})">X</button></li>`;

	// Vider l'input et refocus sur l'input
	item.value = '';
	item.focus();
}

function removeItem(itemId) {
	let item = document.getElementById(itemId);
	todos.removeChild(item);
}

// SOLUTION 2 AVEC UN ARRAY 
let todoArray = [];
let doneArray = [];

function addItem2() {
	// Récupérer la valeur contenue dans l'input 'item-value'
    let item = document.getElementById('item-value');

    // Stop la fonction si l'item est vide
    if (!item.value) {
        return item.focus();
    }

    // Générer l'id de l'item
	let itemId = todoArray.length;
    
    // Ajouter l'élément dans le tableau todoArray
    todoArray.push(`<li id="li-${itemId}"><span onClick="setDone(${itemId})">${item.value}</span> <button type="button" class="pull-right btn btn-warning text-right" onClick="removeItem2(${itemId})">X</button></li>`)
    doneArray.push('');

    // Ajouter une nouvelle ligne dans la liste 'todos'
	todos.innerHTML = todoArray.join('');

	// Vider l'input et refocus sur l'input
	item.value = '';
    item.focus();
    
    return false;
}

function removeItem2(itemId) {
    todoArray[itemId] = '';
	todos.innerHTML = todoArray.join('');
}

function setDone(itemId) {
    let item = document.getElementById('li-' + itemId);
    todoArray[itemId] = '';
    doneArray[itemId] = `<li id="do-${itemId}"><span onClick="undone(${itemId})">${item.querySelector('span').innerHTML}</span></li>`;

    todos.innerHTML = todoArray.join('');
    done.innerHTML = doneArray.join('');
}

function undone(itemId) {
    let item = document.getElementById('do-' + itemId);
    doneArray[itemId] = '';
    todoArray[itemId] = `<li id="li-${itemId}"><span onClick="setDone(${itemId})">${item.querySelector('span').innerHTML}</span><button type="button" class="pull-right btn btn-warning text-right" onClick="removeItem2(${itemId})">X</button></li>`;

    todos.innerHTML = todoArray.join('');
    done.innerHTML = doneArray.join('');
}
