// **Challenge 25**  
// Description:  
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.  
// Use any random API that you want  
// Solution Approach:  
// Utilize the .then method to chain promises.

function getData(url,prevresp=undefined){
    return new Promise((resolve)=>{
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(prevresp){
                    let arr = [];
                    resolve(arr.concat(this.responseText,prevresp));
                }else{
                    resolve(this.responseText);
                }

           }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    })
}
let url1 = 'https://fakestoreapi.com/products/1';
let url2 = 'https://fakestoreapi.com/products/2';

getData(url1).then((response)=>{
    return getData(url2,response);
}).then((response)=>{
    console.log(response);
});
