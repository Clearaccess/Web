/**
 * Created by Aleksandr on 11/7/2016.
 */

function calc(el) {
    
    var op=0;
    var oper="";

    if(el!=null){
        for(var i=0;i<el.length;i++){

            if(el[i]=='+'
                ||
                el[i]=='-'
                ||
                el[i]=='*'
                ||
                el[i]=='/')
            {
                oper=el[i];
                continue;
            }

            if(oper=='+')
            {
                op+=+el[i];
                oper="";
                continue;
            }

            if(oper=='-')
            {
                op-=+el[i];
                oper="";
                continue;
            }

            if(oper=='*')
            {
                op*=+el[i];
                oper="";
                continue;
            }

            if(oper=='/')
            {
                op/=+el[i];
                oper="";
                continue;
            }

            op=+el[i];
            oper="";
        }
    }

    return op;
}

function eventInput() {
    var s=input.value;
    label.textContent="";
    if(s.match(pattern)!=null) {

        label.textContent =calc(s.match(pattern));
    }
}

var input = document.body.children[0];
var label=document.body.children[1];
var pattern=/(\d+)|((\d+)\.(\d)+(e[+-]?\d+)?)|[*+-/]/g;

input.oninput=eventInput;

