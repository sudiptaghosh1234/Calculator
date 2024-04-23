let btns=document.querySelectorAll("button");
let input=document.querySelector("input");

let history_value=[];
let history_result=[];
let result_data="";
let string="";
let c;

btns.forEach((btn)=>
{
    btn.addEventListener("click",(evt_object)=>
    {
        if(evt_object.target.innerText==="=")
        {
            //string=eval(string);
            input.value=eval(string);
            result_data=eval(string);
            history_value.push(string);
            history_result.push(result_data);
            result_data="";
            string="";
            c=0; //To ensure that history will not repeat at a time by clicking the button multiple times
        }
        else if(evt_object.target.innerText==="AC")
        {
            string="";
            input.value=string;
        }
        else if(evt_object.target.innerText==="DEL")
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(evt_object.target.innerText==="CH")
        {
            //clear_all_history();
        }
        else if(evt_object.target.classList.contains("fa-clock-rotate-left"))
        {
            if(c==0)
            {
                showhistory();
                c++;
            }
        }
        else
        {
            string+=evt_object.target.innerText;
            input.value=string;
        }
    });
});

function showhistory()
{
    let historyPrint = document.querySelector("#hist");
    let para=document.createElement("p");
    let i,j;
    for(i=0,j=0; i<history_value.length; i++,j++)
    {
        para.innerHTML+=`${history_value[i]}=${history_result[j]}<br>`;
    }
    if(history_value.length==0)
        para.textContent="No history found";
    historyPrint.appendChild(para);
    history_value.length=0;
    history_result.length=0;
}



//Mode toggle
function change(icon)
{
    // icon.classList.toggle("fa-moon");
    if(icon.classList.contains("gg-sun"))
    {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
        document.getElementById("calc").style.color="black";
        document.getElementById("sp").style.color="black";
        document.getElementById("display").style.border="3px solid black";
        icon.classList.add("gg-moon");
        icon.classList.remove("gg-sun");
    }
    else if(icon.classList.contains("gg-moon"))
    {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        document.getElementById("calc").style.color="white";
        document.getElementById("sp").style.color="white";
        document.getElementById("display").style.border="3px solid rgb(192, 176, 1)";
        icon.classList.add("gg-sun");
        icon.classList.remove("gg-moon");
    }
}

//history div show and hide
function history_show_hide() {
    let historySection = document.querySelector("#hist");
    let buttons = document.querySelectorAll(".but button");

    // Get the computed style of the history section
    let historyDisplayStyle = window.getComputedStyle(historySection).getPropertyValue("display");

    if (historyDisplayStyle === "none") {
        // If the history section is currently hidden, show it and hide the buttons
        historySection.style.display = "block";
        buttons.forEach((button) => {
            button.style.display = "none";
        });
    } else {
        // If the history section is currently shown, hide it and show the buttons
        historySection.style.display = "none";
        buttons.forEach((button) => {
            button.style.display = "inline-block";
        });
    }
}

     function clear_all_history() {
    history_value.length = 0;
    history_result.length = 0;
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
        paragraph.textContent = "";
        paragraph.remove(); // Call the remove method
    });
}