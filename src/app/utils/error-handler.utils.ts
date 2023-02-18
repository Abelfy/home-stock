import { ErrorHandler, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ErrorModalComponent } from "../shared/components/error-modal/error-modal.component";

@Injectable()
export class MyErrorHandler implements ErrorHandler {

    constructor(private _dialog : MatDialog,private _ar : ActivatedRoute,private _router : Router){}

    handleError(error) {
        console.error(error);
        let dialogRef = this._dialog.open(ErrorModalComponent, {
            data : error,
            enterAnimationDuration:'350ms',
            exitAnimationDuration: '250ms'
        });
        dialogRef.afterClosed().subscribe(result => {
            //this._router.navigate(['../'],{relativeTo:this._ar});
          });
  }
}