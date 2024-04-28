function createcard(title,cName,views,months_old,duration,thumbnail){
    let viewStr;
    if(views < 1000){
        viewStr = views;
    } 
    else if(views > 1000000){
        viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }
    
    let html = ` <div class="container">
                        <div class="card">
                            <div class="image">
                                <div class="capsule">
                                   ${duration}
                                </div>
                                <img src=${thumbnail} alt="">  
                            </div>
                            <div class="text">
                                <h1>${title}</h1>
                                <p>${cName} . ${viewStr} views . ${months_old} months ago</p>
                            </div>
                        </div>
                  </div> `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html        
}

createcard("Installing VS Code & How Websites Work |Sigma Web Development Course-Tutorial #1","CodeWithHarry","727000","2","56:00","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")
