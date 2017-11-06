
import { Observable } from "rxjs/Observable";
import { Api } from "./api";

import 'rxjs/add/operator/do'

export class Resource<T extends {id:number}> {

    constructor(
        protected _api:Api<T>,
        protected id?:number, 
        ){
    }
    data:T

    fetch(){
        return this._api.fetchOne(this.id)
        .do( data => {
            this.data = data
        })
    }

    save(data:T):Observable<T>{
        this.data = data
        
        if(this.data['id']){
            return this._api.update(this.data['id'], this.data)
        }else{
            return this._api.create(this.data)
        }
    }

}
