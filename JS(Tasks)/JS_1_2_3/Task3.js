/**
 * Created by Aleksandr on 11/7/2016.
 */

function eventChooseEl(event){
    if(chooseEl!=null){
        chooseEl.className='noChoose';
    }

    chooseEl=event.target;
    chooseEl.className='choose';
    document.getElementsByName('text')[0].value=chooseEl.innerHTML;
    document.getElementsByName('color')[0].value=chooseEl.style.color;
    document.getElementsByName('marker')[0].value=chooseEl.style.listStyle;
}

function eventCreateEl() {
    var newEl=document.createElement('li');
    newEl.className='noChoose';
    newEl.innerHTML=document.getElementsByName('text')[0].value;
    newEl.style.color=document.getElementsByName('color')[0].value;
    newEl.style.listStyle=document.getElementsByName('marker')[0].selectedOptions[0].value;
    document.getElementsByName('list')[0].appendChild(newEl);
}

function eventChangeEl() {
    if(chooseEl==null){
        alert('Element must be choosed');
        return;
    }

    chooseEl.innerHTML=document.getElementsByName('text')[0].value;
    chooseEl.style.color=document.getElementsByName('color')[0].value;
    chooseEl.style.listStyle=document.getElementsByName('marker')[0].selectedOptions[0].value;
}

function eventDeleteEl() {
    if(chooseEl==null){
        alert('Element must be choosed');
        return;
    }

    document.getElementsByName('list')[0].removeChild(chooseEl);
    chooseEl=null;
}

var chooseEl;

var actSelect=document.getElementsByName('list')[0];
var actCreate=document.getElementsByName('create')[0];
var actChange=document.getElementsByName('change')[0];
var actDelete=document.getElementsByName('delete')[0];

actSelect.onclick=eventChooseEl;
actCreate.onclick=eventCreateEl;
actChange.onclick=eventChangeEl;
actDelete.onclick=eventDeleteEl;
