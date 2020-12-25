let state = 0;
    let text = "> Hello, SoloLearn!\nI'm Susmit.";

    let target = document.querySelector("#target");

    let addText = () => {
        if(state < text.length){
            if(state==0){
                target.innerHTML = text[state];
                state++;
            }
            else{
                let ch="";
                if(text[state]==" ") ch = "&nbsp";
                else if(text[state]=="\n") ch = "<br/>";
                else ch = text[state];
                target.innerHTML = target.innerText + ch;
                state++;
            }
        }
        else{
            clearInterval(intvl);
        }
    }

    let intvl = null;

    let renderText=()=>{
        intvl = setInterval(addText,320);
    }

    setTimeout(renderText,800);

            
