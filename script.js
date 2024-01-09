const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
checkBtn.onclick = () => {
    const value = input.value;
    const regex = /^1?\s*\-*\d{3}(\s|\-)?\s*\d{3}(\s|\-)?\d{4}$|^1?\s*\-*\(\d{3}\)(\s|\-)?\s*\d{3}(\s|\-)?\d{4}$/ 
    let p = document.createElement("p");
    p.setAttribute("id", "input__result")
    if(value === ""){
        return alert("Please provide a phone number")
    }
    else if (regex.test(value)){
        p.textContent = `Valid US number: ${value}`;
        result.append(p)  
        p.style.color = "green";
        input.value = "";
    }
    else{
        p.textContent = `Invalid US number: ${value}`;
        result.append(p)  
        p.style.color = "red";
        input.value = "";
    }
    
}
clearBtn.onclick = () => {
  return  result.textContent = ""; 
} 