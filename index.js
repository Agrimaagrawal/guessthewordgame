let g=document.querySelector(".firstline");
let f=document.querySelector(".hidden");
let btn=document.querySelector(".btn");
let sWords=['python','javascript','c++','php','program','computer','operating','system','lamp'];
let newWords="";
let ranWords="";
let play=false;
let score=document.querySelector(".score");
let s=0;
function startf(){
    if(!play){
        play=true;
    f.style.display="block";
    g.style.display="block";
    btn.innerHTML="Submit";
    newWords=createNewWords();
    ranWords=ScrambleWords(newWords.split(""));
    g.innerHTML=`Guess the word ${ranWords.join("")}`;
    
    }
    else{
        let tempWord=f.value;
        if(tempWord===newWords){
            play=false;
            g.innerHTML='You Guess It Right!';
            f.style.display="none";
            btn.innerHTML="Start Again";
            s=s+1;
            score.innerHTML=`${s}`;
            f.value="";

        }
        else{
                g.innerHTML=`wrong! guess again ${ranWords.join("")}`;
                btn.innerHTML="guess Again";
                
                if(s>0){
                    s=s-1;
                score.innerHTML=`${s}`;
                }
                else{
                    s=0;
                    score.innerHTML=`${s}`;
                }
                
                

        }

    }
    
    
}
const createNewWords=()=>{
    let ranNum=Math.floor(Math.random()*sWords.length);
    let newTempSwords=sWords[ranNum];
    return newTempSwords;
}
const ScrambleWords=(arr)=>{
    for(let i=arr.length-1;i>0;i--){
        let temp=arr[i];
        let j=Math.floor(Math.random()*(i+1));
        arr[i]=arr[j];
        arr[j]=temp;

    }
    return arr;

}
