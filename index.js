const seedColor = document.getElementById("seed-color")
const selectedOption = document.getElementById("selected-option")
const colorBtn = document.getElementById("color-btn")
const colorSection = document.getElementById("color-section")

let selSeedColor = ''
let colorSectionHtml = ''

seedColor.addEventListener('input', function(){
    selSeedColor = seedColor.value.substring(1)
})

colorBtn.addEventListener('click', function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${selSeedColor}&mode=${selectedOption.value}&count=5`)
        .then(res => res.json())
        .then(data => { 
            for (color of data.colors){
                colorSectionHtml += `
                <div class="color-item-container">
                    <div class="color-item" style="background-color: ${color.hex.value}"></div>
                    <p class="hex-values">${color.hex.value}</p>
                </div>
                ` 
            }
            colorSection.innerHTML = colorSectionHtml
            })
})



seedColor.addEventListener('input', function(){
    colorSectionHtml = ''
    colorSection.innerHTML = ''
})

selectedOption.addEventListener('click', function(){
    colorSectionHtml = ''
    colorSection.innerHTML = ''
})