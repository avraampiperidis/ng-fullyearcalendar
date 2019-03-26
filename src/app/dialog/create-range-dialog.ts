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

    @Input()
    range:any;

    constructor(){}

    ngOnDestroy(): void {
        this.onSave.unsubscribe();
    }
    ngOnInit(): void {
        if(!this.range) {
            this.range = {};
        }
    }

    onSaveClick():void {
        if(this.range.start && this.range.end) {
            if(this.range.start > this.range.end) {
                throw new Error('start date cant be after end date!');
            }
        }
        if((!this.range.start) || (!this.range.end)) {
            throw new Error('Start date and End date must be set');
        }
        this.onSave.emit(this.range);   
    }

    onCloseClick():void {
        this.onClose.emit();
    }
}