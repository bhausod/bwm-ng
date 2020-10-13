import { Injectable } from '@angular/core';
import { Rental } from '../shared/rental.modal';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';

@Injectable()
export class RentalService {

    constructor(private http: HttpClient) {

    }
    public getRentals(): Observable<any> {
        debugger;
        return this.http.get('/api/v1/rentals');
    }

    public getRentalById(rentalId: string): Observable<any> {
        return this.http.get('/api/v1/rentals/' + rentalId);
    }
}