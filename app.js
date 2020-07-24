var list = document.getElementById("list")

function addTodo(){
   
    var todo_task = document.getElementById("to_do_item")

    //   create li tag with text node 

    var li = document.createElement('li')

    var li_text=document.createTextNode(todo_task.value)

    li.appendChild(li_text)

    list.appendChild(li)

    //    create delete button in li

    var del=document.createElement('button')

    var del_text = document.createTextNode('DELETE')

    del.appendChild(del_text)

    del.setAttribute('class','btn1')

    del.setAttribute('onclick','delete_task(this)')

    li.appendChild(del)

    //    create edit button in li

    var edit=document.createElement('button')

    var edit_text = document.createTextNode('EDIT+')

    edit.appendChild(edit_text)

    edit.setAttribute('class','btn2')

    edit.setAttribute('onclick','edit_task(this)')

    li.appendChild(edit)



    todo_task.value=""

    
}

function delete_task(e) {

    e.parentNode.remove()

}

function deleteall(){

    list.innerHTML=""

}

function edit_task(f){
    
    var val = f.parentNode.firstChild.nodeValue;

    var editvalue = prompt ("Enter edit value",val)

    f.parentNode.firstChild.nodeValue=editvalue

}