const task = document.querySelector('input');
const btn = document.querySelector('.btn');

btn.addEventListener('click',createTable)

function createTable() {
	let table = document.querySelector("table");
	let columnvalue = document.querySelector('.columnvalue').value;
	let rowvalue = document.querySelector('.rowvalue').value;
	for(let	i=0; i<rowvalue; i++) {
		let row = table.insertRow();
		for(let i=0; i<columnvalue; i++) {
			let column = row.insertCell();
		}
	}


	/*
	let thead = table.createTHead();
  	let row = thead.insertRow();
	const taskList = document.querySelector('.todo');
	let li = document.createElement('li');
	li.textContent = task.value;
	taskList.appendChild(li);
	*/
}
