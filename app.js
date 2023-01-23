const getColor = () =>{
    const random = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + random.toString(16);
    console.log(randomColor);
    const color = document.querySelector(".color").innerHTML = randomColor;
    const body = document.querySelector("body").style.backgroundColor = randomColor;
    navigator.clipboard.writeText(randomColor);
}
document.getElementById("btn").addEventListener("click",()=>{
    getColor();
});

