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
const user={
    name:'Dipa',lastActivityTime:'3 Nov'
};

function UpdatelastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime();
            resolve(user.lastActivityTime);
        },1000)
    })
}
function userUpdatespost()
{
    Promise.all([createPost,UpdatelastActivityTime])
    .then(([createPostresloves,UpdatelastActivityTimereslove])=>
    {
       // getPosts();
        console.log(UpdatelastActivityTimereslove);
    }).catch(err=>console.log(err));
}
//createPost({title:'post Three',body:'this is post three'}).then(getPosts);
//const promise2=10;
//const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'good bye'));
//Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

