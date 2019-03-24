import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector:'create-range-dialog',
    templateUrl:'create-range-dialog.html'
})
export class CreateRangeDialog implements OnInit,OnDestroy {
   
    @Input()
    display:boolean;

    @Output()
    onSave:EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onClose:EventEmitter<any> = new EventEmitter<any>();

    fromDate:Date;
    toDate:Date;
    tooltip:string;
    color:string;

    constructor(){}

    ngOnDestroy(): void {
        this.onSave.unsubscribe();
    }
    ngOnInit(): void {
    }

    onSaveClick():void {
        if(this.fromDate && this.toDate) {
            if(this.fromDate > this.toDate) {
                throw new Error('start date cant be after end date!');
            }
        }
        if((!this.fromDate) || (!this.toDate)) {
            throw new Error('Start date and End date must be set');
        }
        let ob = {start:this.fromDate,end:this.toDate,tooltip:this.tooltip,color:this.color};
        this.onSave.emit(ob);   
    }

    onCloseClick():void {
        this.onClose.emit();
    }
}