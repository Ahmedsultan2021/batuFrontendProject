fetch('http://localhost:3000/posts')
.then(response=>response.json())
.then(posts=>{
   const rowPosts = document.getElementById("posts");
    
    function myfunction(value,index,arr){
        rowPosts.innerHTML += `
        <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1>${value.title}</h1>
            <p class="card-text">${value.desc.substring(0,50)}...</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-info">Edit</button>
                <button type="button" onclick="deletePost('${value.id}')" class="btn btn-sm btn-danger">delete</button>
              </div>
              <small class="text-body-secondary">${value.created_at}</small>
            </div>
          </div>
        </div>
      </div>
        `
    }

    posts.forEach(myfunction);
})
.catch(error=>console.log(error));


function deletePost(id){
    console.log(id);
    fetch('http://localhost:3000/posts/'+id,{
        method:'DELETE',
        body: JSON.stringify({
            id:id
        })
    })
    .then(response=> response.json())
    .catch(erorr=>console.log(erorr));
}
