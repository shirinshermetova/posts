let list = document.querySelector(".list")
let data = []

async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(response);
        data = await response.json()
        console.log(data);
        render (data)   
    }
    catch(error){
        console.log('Xatolik', error);   
    }
}
function render(){
    list.innerHTML = data.map((post) => `<li>${post.title}</li>`).join("")
}
getPosts()


