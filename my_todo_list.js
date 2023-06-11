//Pour ajouter une tâche à la table A faire !
function add() {
    const input = document.createElement("input");
    input.type = 'checkbox'
    var label = document.createElement('label')
    const inputValue = document.getElementById('added').value;
    const p = document.createTextNode(inputValue);
    label.appendChild(p);
    if (inputValue === '') {
        alert("Tu dois écrire quelque chose !");
    } else {
        document.getElementById("field").appendChild(label).appendChild(input);
    }
    document.getElementById('field').value = "";

    var br = document.createElement('br');

    var container = document.getElementById('field');
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(br);
}

const list = document.getElementsByTagName('label');
var i;
for (i = 0; i < list.length; i++) {
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}