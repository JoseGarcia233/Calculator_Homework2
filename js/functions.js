
const txtValuTop = document.querySelectorAll(['data-value-top'])
const txtValuBelw = document.querySelectorAll(['data-value-below'])
const btnNum = document.querySelectorAll('[data-num]')
const btnOper = document.querySelectorAll('[data-op]')
const btnAc = document.querySelectorAll('[data-Ac]')
const btnC = document.querySelectorAll('[data-c]')
const btnEeq = document.querySelectorAll('[data-equal]')
const res = document.createElement("h1")
const sc = document.querySelector(".screen")
const btnDlt = document.querySelectorAll('[data-dele]')
const showR = document.getElementById("show-res")
const showH1 = document.createElement("h3")
showH1.className = "showNew"


btnNum.forEach(btn => {
  btn.addEventListener('click', () => {
    res.textContent += btn.textContent
    sc.appendChild(res)
    console.log(res.textContent)

  })
})

btnOper.forEach(btn => {
  btn.addEventListener('click', () => {
    res.textContent += btn.textContent
    sc.appendChild(res)
    console.log(res.textContent)

  })
})

btnAc.forEach(btn => {
  btn.addEventListener('click', () => {
    res.textContent = ""
    sc.appendChild(res)


  })
})

btnC.forEach(btn => {
  btn.addEventListener('click', () => {
    res.textContent = res.textContent.substring(0, res.textContent.length - 1)
    sc.appendChild(res)


  })
})

btnEeq.forEach(btn => {
  btn.addEventListener('click', () => {
    showH1.innerHTML = ""
    res.textContent = eval(res.textContent)
    sc.appendChild(res)
    let numRan = Math.floor(Math.random() * 9999) + 1111;
    localStorage.setItem(numRan, res.textContent)
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      showH1.innerHTML += `${key}: ${localStorage.getItem(key)} <br>`;
      showR.appendChild(showH1);
    }
  })
})



btnDlt.forEach(btn => {
  btn.addEventListener('click', () => {

    document.getElementById("show-res").innerHTML = "";
    localStorage.clear();


  })
})


for (let i = 0; i < localStorage.length; i++) {

  let key = localStorage.key(i);
  showH1.innerHTML += `${key}: ${localStorage.getItem(key)} <br>`;
  showR.appendChild(showH1);
}











