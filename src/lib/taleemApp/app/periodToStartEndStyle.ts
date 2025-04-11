


export default function periodToStartEndStyle(slides){

    // const slides = JSON.parse(JSON.stringify(incommingSlides));
    let mainStartTime = 0;

for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    
    if(slide.type == "canvas"){
        slide.startTime = mainStartTime;
        slide.endTime = slide.startTime + slide.period;
        mainStartTime =  slide.endTime; //updated for next time  
    }else {
        // debugger;
        slide.startTime = mainStartTime;
        slide.endTime = slide.startTime + getEqSlidePeriod(slide);
        manageEqItems(slide,slide.startTime);
        mainStartTime =  slide.endTime; //updated for next time  
    }
}//for main
return slides;
}
//////////////////////////////////////////////////////////////////////
function getEqSlidePeriod(slide:IPBSItem):number{
    let period = 0
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        period += item.endTime;
    }
    return period;
}
function manageEqItems(slide,slideStartTime){
    let mainStartingTime = slideStartTime;
 // debugger;
     for (let i = 0; i < slide.items.length; i++) {
         const item = slide.items[i];
         item.startTime = mainStartingTime;
         item.endTime = item.startTime + item.period;
         mainStartingTime = item.endTime;
     }
 }