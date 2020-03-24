
import uuidv1 from "uuid"; 

let intiatestate =  {tab : [
    {id: uuidv1(),image:'https://cdn-static.egybest.net/serve/movies/art-0487660550-x300.jpg', title : "Papparazi-للحب حكاية" , yellowstars: 3 , year: "2014"},
    {id: uuidv1(),image:'https://cdn-static.egybest.net/serve/movies/art-2829571875-x300.jpg' , title : "كازانوفا" , yellowstars : 3 , year: "2019"} ,
    {id: uuidv1(),image:'https://cdn-static.egybest.net/serve/movies/art-0499143918-x300.jpg' , title : "أسوار القمر" , yellowstars : 2, year: "2015" },
    {id: uuidv1(),image:'https://cdn-static.egybest.net/serve/movies/art-2810071121-x300.jpg' , title : "قصة حب"  , yellowstars : 5, year: "2019"},
    {id: uuidv1(),image:'https://cdn-static.egybest.net/serve/movies/art-0510051984-x300.jpg' , title : "بابا" , yellowstars : 4, year: "2012" },
    {id: uuidv1(),image:'https://cdn-static.egybest.net/serve/movies/art-0502609900-x300.jpg' , title : "المصلحة" , yellowstars : 2, year: "2013"} ,
   
    ] }

    function Datareducer (state=intiatestate,action){

    if (action.type === "movielist") {

        return state 
    }
    else if (action.type==="Remove"){
         console.log({tab: state.tab, action})
        return {tab:state.tab.filter((el) => el.id !== action.payload)}
    }
 
    else if (action.type==="add") {

         return {tab: state.tab.concat(action.payload)}
    }
    else  return state 
}



    export default Datareducer;