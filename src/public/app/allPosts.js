function loadPosts() {
    let count =1;
    $.get('/api/posts', (posts) => {
        for(let p of posts) {
            $('#posts-container').append(
                $(`
                <div  class="card m-2 " style="width: 18rem;">
                
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">${p.body.substr(0,100)}
                  <a href="#" id="${count++}">...read more</a>
                  </p>
                  <a href="#" class="btn btn-primary">Like</a>
                  <a href="#" class="btn btn-warning">Comment</a>
                </div>
              </div>
              
                `)
            )
        }
    })
}

