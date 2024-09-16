const form = document.querySelector('.form')
const taskInput = document.querySelector('.task')
const display = document.querySelector('.display')

const arr = ["react", "javascript"];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoitem = taskInput.value;
    if (todoitem) {
        arr.push(todoitem);
        display.innerHTML = '';
        displaytasks(arr)
        taskInput.value = '';
        console.log(arr);

    } else {
        alert("Please Enter A Task")
    }

})

function displaytasks(arr) {

    arr.length == 0 ? display.innerHTML = `<p>There are no tasks currently!</p>` : null

    arr.forEach((e, idx) => {

        const eachtask = document.createElement('div');
        eachtask.className = "taskcontainer"
        const sl = document.createElement('h3');
        sl.innerText = idx+1;

        const taskval = document.createElement('p');
        taskval.classList.add('tv');
        taskval.innerText = e;

        const edit = document.createElement('button')
        edit.className = 'edit';
        edit.textContent = "Edit"

        edit.addEventListener('click', (e) => {
            if (edit.className === 'edit') {
                editval(e, idx)
            } else {
                saving(e, idx)
            }
        })

        const del = document.createElement('button')
        del.className = 'del';
        del.textContent = "Delete"
        del.addEventListener('click', () => delval(idx))

        eachtask.append(sl,taskval, edit, del)
        display.appendChild(eachtask);
    })
}

displaytasks(arr)

function editval(ele, val) {

    console.log(val, ele.target);
    const data = ele.target.parentElement.querySelector('.tv');
    console.log(data);

    const inp = document.createElement('input')
    inp.value = data.textContent;
    inp.className = 'tempedit'
    ele.target.parentElement.replaceChild(inp, data);
    ele.target.innerText = "Save"
    ele.target.className = "save"

    // ele.target.previousSibling = `<input type="text" value=${ele.target.value}>`

}

function saving(ele, val) {
    const data = ele.target.parentElement.querySelector('input');
    const update = data.value
    const text = document.createElement('p')

    text.className = 'tv'
    text.innerText = update;
    arr[val] = update

    ele.target.parentElement.replaceChild(text, data);
    ele.target.innerText = "Edit"
    ele.target.className = "edit"
}

function delval(val) {
    arr.splice(val, 1);
    display.innerHTML = '';

    displaytasks(arr)
    console.log(arr);
}

