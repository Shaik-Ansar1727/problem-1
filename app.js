const information = async () => {
    try {
       const response= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

let loadpost = document.querySelector('.loadposts');
let contentbox= document.querySelector('.content-box');
let postcount = document.querySelector('.posts-count');
loadpost.addEventListener('click',async () =>{
    contentbox.innerHTML ="";
    postcount.textContent ="Loading...";
   let data= await information();
   console.log(data)
    data.forEach(element => {
    contentbox.innerHTML+=`<div class="card">
                <h4>
                    ${element.title} 
                </h4>
                <div class="">
                   ${element.body}
                </div>
              
            </div>`

   });
   postcount.textContent=`${15} posts loaded`;

})
let clear = document.querySelector('.Clear');
clear.addEventListener('click',()=>{
    contentbox.innerHTML="";
    postcount.textContent ="";
})
