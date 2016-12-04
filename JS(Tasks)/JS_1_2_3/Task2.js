/**
 * Created by Aleksandr on 11/7/2016.
 */

function selectCL(words) {

    var letters = {};

    for(var i=0;i<words.length;i++){

        var meetedL={};

        for(var j=0;j<words[i].length;j++){

            if(isNaN(+letters[words[i][j]])) {
                letters[words[i][j]]=1;
                meetedL[words[i][j]]=true;
                continue;
            }

            if(isNaN(+meetedL[words[i][j]])) {
                letters[words[i][j]]++;
                meetedL[words[i][j]]=true;
            }
        }
    }

    return letters;
}

function formateOutS(inS,letters,count) {

    var re = "";

    for (var i = 0; i < inS.length; i++) {

        if (letters[inS[i]] == count) {
            continue;
        }

        re += inS[i];
    }

    return re;
}

function eventInput() {
    var s=input.value;
    var letters = {};
    var words=s.match(pattern);
    label.textContent='';

    if(words!=null) {
        letters=selectCL(words);
        label.textContent = formateOutS(s,letters,words.length);
    } else {
        label.textContent = "";
    }
}

var input = document.body.children[0];
var label=document.body.children[1];
var pattern=/[^.?,;:!]+/g;

input.oninput=eventInput;