const posts=[{title:'Post One',body:'This is post one',createAt:new Date().getTime()},
{title:'Post Two',body:'This is post two',createAt:new Date().getTime()}]

let intervalId=0;

function getPosts(){
    clearInterval(intervalId);

    intervalId=setInterval(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        output+=`<li>${posts[i].title}-last updated ${(new Date().getTime() - posts[i].createAt)/1000} sec ago.</li>`;
    }
    document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback)
{
    setTimeout(()=> {
        posts.push({...post,createAt:new Date().getTime()});
        callback();
         },2000);
}

function create4thPost(post,callback)
{
    setTimeout(()=>{
        posts.push({...post,createAt:new Date().getTime()});
        callback();
    },4000);
}


getPosts();
createPost({title:'post Three',body:'this is post three'},getPosts);
create4thPost({title:'post Four',body:'this is post four'},getPosts);
 