// the start date method wrks only if the user enters the date only...!!!!!!!!!
// as there is no specific format mentioned for input complete date

class Mission{
    constructor(id, coordinatorName){
        this._missionid =Math.abs(id);
        if(coordinatorName.length<128){
            this._coordinatorName = coordinatorName;
        }
        else{
            console.log("The length of Coordinator Name  is greater than 128");
        }
    }

    get missionid(){
        return this._missionid;
    }
    get coordinatorName(){
        return this._coordinatorName;
    }
} // end of Mission Class


class Actions {
    constructor( staffName, actionDetail, actionStatus=false, peopleAffected =0){
        if(staffName.length<128){
        this._staffName = staffName;
    }
    else{
        console.log("The length of staff-Name word is greater than 128");
    }
        this._actionDetail = actionDetail;
        this._actionStatus = actionStatus;
        this._peopleAffected = Math.abs(peopleAffected);
    } // end of actions constructor


    get staffName(){
        return this._staffName;
    }

    get actionDetail(){
        return this._actionDetail;
    }

    set actionStatus(as){
        this._actionStatus =as;
    }

    get actionStatus(){
        return this._actionStatus;
    }

    set peopleAffected(pa){
        this._peopleAffected =Math.abs(pa);
    }

    get peopleAffected(){
        return this._peopleAffected;
    }


} //end of action class

class SyrianMission extends Mission{
        constructor( id,coordinatorName, countryName = "Syria", startDate){
        super(id, coordinatorName);   
        if(countryName.length<128){
        this._countryName =  countryName;
        
    }
    else{
        console.log("The Length of country name is greater than 128");
    }  
        this._startDate = startDate ? startDate: new Date();
        this._endDate = new Date(this._startDate);
        this._endDate.setDate(this._endDate.getDate()+30);      
        this._actionlist = [];
        
    }   

   get countryName(){
       return this._countryName;
   }
   // the startDate method works only if the user enters the date only of current month.
    set startDate(x){ 
       this._startDate.setDate(x);
    }
    
    get startDate(){
        return this._startDate;
    }

    get endDate(){
       return this._endDate;    
    }

    addAction(obj_Action){
        this._actionlist.push(obj_Action);
        return this._actionlist;
    }

    getInActiveActions(){
        let inactive = [];
        for(let i=0; i<this._actionlist.length;i++){
            if(this._actionlist[i].actionStatus == true){ ///true means mission is finished
               inactive.push(this._actionlist[i]);
            }
        }
        return inactive;

    } // end of GetInActiveActions function

    getActiveActions(){
        let active = [];
        for(let i=0; i<this._actionlist.length;i++){
            if(this._actionlist[i].actionStatus == false){ ///false means mission is not finished
                active.push(this._actionlist[i]);
            }
        }
        return active;

    } // end of GetActiveActions function


    showActions(actionshow){
        let result =' ';
        for(let i=0; i<actionshow.length;i++){
            result  += "This mission is lead by " + actionshow[i].staffName + 
            " on " + actionshow[i].actionDetail +"." +"\n" + " ";
        }
        return result;
    } // end of ShowAction function

    sumPeopleAffected(){
        let spa = 0;
        for(let i=0; i<this._actionlist.length;i++){
            if(this._actionlist[i].actionStatus == true){
            spa +=this._actionlist[i].peopleAffected;
            }
        }
        return spa;
    } // end of TotalPeople affected function

} // end of SyrianMission

let a1 = new Actions("Paul", "Goal 3: Good health and well-being"); 
let a2 = new Actions("John", "Goal 6: Clear water and sanitation") ;
let a3 = new Actions("Maria", "Goal 4: Quality education", true, 10); 


let syria = new SyrianMission(1, "Dr. Ada");


syria.addAction(a1); 
syria.addAction(a2); 
syria.addAction(a3);


a2.actionStatus = !a2.actionStatus;
a2.peopleAffected =5;

let inactiveActions, activeActions = []; 
inactiveActions = syria.getInActiveActions();
activeActions = syria.getActiveActions();

console.log("The number of inactive Actions are "+ inactiveActions.length);
console.log(syria.showActions(inactiveActions));
//syria.showActions(inactiveActions)


console.log("The number of active Actions are "+ activeActions.length);
console.log(syria.showActions(activeActions));
//syria.showActions(activeActions)


console.log("Total number of peeople affected in finished missions are " + syria.sumPeopleAffected()+ "\n");

//console.log("The start date of Syrian mission is  "+ syria.startDate + "\n");
//console.log("The end date of Syrian mission is  "+ syria.endDate + "\n");










