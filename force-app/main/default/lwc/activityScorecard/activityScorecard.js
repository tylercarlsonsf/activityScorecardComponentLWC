import { LightningElement, track, api  } from 'lwc';

export default class ActivityScorecard extends LightningElement {
    @api Title;
    @api kpiTitle1;
    @api kpiValue1;
    @api kpiSign1;
    @api kpiTitle2;
    @api kpiValue2;
    @api kpiSign2;
    @api activityIcon1;
    @api activitiesCompleted1;
    @api activitiesDescription1;
    @api personalBest1;    
    @api activityIcon2;
    @api activitiesCompleted2;
    @api activitiesDescription2;
    @api personalBest2;    
    @api activityIcon3;
    @api activitiesCompleted3;
    @api activitiesDescription3;
    @api personalBest3;    
    @api activityIcon4;
    @api activitiesCompleted4;
    @api activitiesDescription4;
    @api personalBest4;
    


    get progress1 () {
        return (this.activitiesCompleted1/this.personalBest1)*100;
        
    }
    
    get conditional1 () {
        if ( this.activitiesCompleted1 <= this.personalBest1 ) {
            return true;
        }

    }

    get progress2 () {
        return (this.activitiesCompleted2/this.personalBest2)*100;
        
    }
    
    get conditional2 () {
        if ( this.activitiesCompleted2 <= this.personalBest2 ) {
            return true;
        }

    }

    get progress3 () {
        return (this.activitiesCompleted3/this.personalBest3)*100;
        
    }
    
    get conditional3 () {
        if ( this.activitiesCompleted3 <= this.personalBest3 ) {
            return true;
        }

    }

    get progress4 () {
        return (this.activitiesCompleted4/this.personalBest4)*100;
        
    }
    
    get conditional4 () {
        if ( this.activitiesCompleted4 <= this.personalBest4 ) {
            return true;
        }

    }
    

}