
interface IPBSItem {
    endTime: number;//replace with period when data fixed
}

export default class PeriodBasedSystem {
    private pbs: IPBSItem[];
   

    constructor(pbsArray: IPBSItem[]) {
        this.pbs = pbsArray;
    }

    getTotalPeriod(): number {
        return this.pbs.reduce((total, item) => total + item.endTime, 0);
    }
//always return item 1 since it is need of App/slide

get(currentTime:number=0,startTime:number=0):IPBSItem |null{

    const elapsedTime = currentTime - startTime;
    ////////////////////////
    const totalPeriod = this.getTotalPeriod();

    if (elapsedTime > totalPeriod) {
        return null; // Time is past the end of the system.
    }
    /////////////////////////////////////////    
    let cumulativeTime = 0;
//The real code
    for (const item of this.pbs) {
        if (elapsedTime >= cumulativeTime && elapsedTime < cumulativeTime + item.endTime) {
            return item;
        }
        cumulativeTime += item.endTime; // should be item.period
    }
    return null; // Should not reach here in normal operation.
}

}