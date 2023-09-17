// // fetch("http://www.omdbapi.com/?i=tt3896198&apikey=744485b9")
// fetch("http://www.omdbapi.com/?t=Pushpa&y=2022&apikey=744485b9")
// .then(function(res){
//     res.json().then(function(res){
//         console.log(res);
//     })
// })
// let url="";
// function myfunction(){
document.getElementById("search").addEventListener("click",info)
// }
function info(){
    let url="";
    let data={};
    console.log("hii");
    let title=document.getElementById("title").value;
    let year=document.getElementById("year").value;
    url="http://www.omdbapi.com/?t="+title+"&y="+year+"&apikey=744485b9";
    console.log(url)
    fetch(url)
    .then(function(res){
        res.json().then(function(res){
            console.log("data: ",res);
            data=res;
            if(data.Title==undefined)
            {
                notFound();
            }
            else{
            showInfo(data);
            }
        })
    })
    .catch(function(err){
        console.log(err);
    })
    
}
function showInfo(data){
    let info=document.getElementById("info");
    let bag=document.getElementById("rec");
    info.innerText="";

    let image=document.createElement("img");
    image.src=data.Poster;

    let title=document.createElement("p");
    title.innerText=data.Title;

    let released=document.createElement("p");
    released.innerText=data.Released;

    let rated=document.createElement("p");
    rated.innerText=data.imdbRating;

    let rating=parseFloat(data.imdbRating);
    console.log(rating);

    let recommendation=document.createElement("img");
    recommendation.src="recommendation.png";

    let runtime=document.createElement("p");
    runtime.innerText=data.Runtime;

    let box1=document.createElement("div");
    box1.append(title,runtime);
    let box2=document.createElement("div");
    box2.append(rated,released);

    info.append(image,box1,box2);

    if(rating>8.5)
    {
        bag.innerHTML=null;
        bag.append(recommendation);
    }
    else{
        bag.innerHTML=null;
    }
}

function notFound(){
    let info=document.getElementById("info");
    let bag=document.getElementById("rec");
    info.innerHTML="";
    bag.innerHTML="";
    let image=document.createElement("img");
    image.src="https://media.tenor.com/gWihkThRSIQAAAAM/hard-to-find-in-the-stores-hydration.gif";
    info.append(image);
}