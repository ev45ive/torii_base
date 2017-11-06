import { Observable } from "rxjs/Observable";
import { Injectable, InjectionToken } from "@angular/core";
import { HttpClient } from '@angular/common/http'

type Partial<T> = {
    [P in keyof T]?: T[P];
};

/*
    UserApi extends Api<User>
    RestaurantApi extends Api<Restaurant>

*/
@Injectable()
export class Api<T> {

    constructor(protected _http:HttpClient, protected _url){ }
    

    fetchAll():Observable<T[]>{
        return this._http.get<T[]>(this._url)
    }

    fetchOne(id:number):Observable<T>{
        return this._http.get<T>(this._url + id)
    }

    create(data:Partial<T>):Observable<T>{
        return this._http.post<T>(this._url, data)
    }

    update(id:number, data:T):Observable<T>{
        return this._http.put<T>(this._url + id, data)
    }

    delete(id:number):Observable<any>{
        return this._http.delete(this._url + id)
    }    
}
