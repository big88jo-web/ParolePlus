
let phrases=[];let index=loadProgress();
fetch('data/phrases.json').then(r=>r.json()).then(d=>{phrases=d;render();});
function render(){emoji.textContent=phrases[index].emoji;phrase.textContent=phrases[index].phrase;progress.textContent=`${index+1}/${phrases.length}`;}
function speakPhrase(){speak(phrases[index].phrase);}
function nextPhrase(){index=(index+1)%phrases.length;saveProgress(index);render();}
function repeatMode(){speakPhrase();let s=5;countdown.textContent=s;const t=setInterval(()=>{s--;countdown.textContent=s;if(s<=0){clearInterval(t);nextPhrase();}},1000);}
