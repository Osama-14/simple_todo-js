var fname = document.getElementById('fName');
var addValue = document.getElementById('addValue');
var secContainer = document.getElementById('secContainer');
addValue.innerHTML = "Add";
addValue.addEventListener('click',function(){
    // Creating Elements
    var div = document.createElement('div');
    var paragraph = document.createElement('p');
    var edit = document.createElement('button');
    var _delete = document.createElement('button');

    // assiging form input to todo paragraph
    paragraph.innerText = fname.value;

    // assigning delete and edit title to buttons
    edit.innerText = "edit";
    _delete.innerText = "delete";


    div.appendChild(paragraph);
    div.appendChild(edit);
    div.appendChild(_delete);

    secContainer.appendChild(div);
    fname.value = "";

    _delete.addEventListener('click',function(){
        secContainer.removeChild(div);
    })

    edit.addEventListener('click',function(e){
        var ed = div.firstChild.innerHTML;
        var newVal = prompt("Enter updated value", ed);
        ed = newVal;
    })

})



