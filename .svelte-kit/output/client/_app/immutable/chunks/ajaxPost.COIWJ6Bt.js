async function r(e,n){try{return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer token"},body:JSON.stringify(n)})}catch(t){return t}}export{r as a};
