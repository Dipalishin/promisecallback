const posts=[{title:'Post One',body:'This is post one',createAt:new Date().getTime()},
{title:'Post Two',body:'This is post two'}]

function getPosts(){
      intervalId=setInterval(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        output+=`<li>${posts[i].title}</li>`;
    }
    document.body.innerHTML=output;
    },1000);
}

function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('error:something went wrong');
            }
        },2000);
    });
}

function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                resolve(posts.pop());
           }else{
            reject('Array is empty now');
           }
            
            
        },1000)
    })
}
createPost({title:'post Three',body:'this is post three'}).then(()=>{
    getPosts();
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{}).catch((err)=>{
                    console.log('inside catch block '+err);
                })
            })
        })
    });
})


