



 async function movieData() {
     try {

        let search = document.getElementById("movie").value;
        let url = "http://www.omdbapi.com/?t=avengers&apikey=5da03de0"
       
        let res = await fetch(url);
        let data = await res.json()

        console.log("data", data)
        movieAppend(data)

     } catch (error) {
     console.log(" error", error)
         
     }
   
 }
 let show = document.getElementById("show")

 movieData()

 function movieAppend(item) {
  // data.forEach(function (el){
let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = item.Poster;

    let tittle = document.createElement("h2");
    tittle.textContent = item.Title;

     let type = document.createElement("h3");
     type.textContent = item.Type 

     let year = document.createElement("h2");
     year.textContent = item.Year 

div.append(img,tittle,type,year)
show.append(div)

  // })
      
    
 

     
 }
