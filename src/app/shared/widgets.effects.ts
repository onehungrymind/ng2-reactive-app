import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {WidgetsService} from "./widgets.service";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {DELETE_WIDGET} from "./widgets.reducer";
import { of } from 'rxjs/observable/of';
@Injectable()
export class WidgetsEffect {
  constructor(private actions$: Actions,
              private widgetsService: WidgetsService
  ){}

  @Effect() delete$: Observable<Action> = this.actions$
    .ofType(DELETE_WIDGET)
    .map(action => action.payload)
    .switchMap((widget)=>{
      return this.widgetsService.deleteWidget(widget)
                .map(success => console.log("success"))
                .catch(() => of("errror"))
    });
}
