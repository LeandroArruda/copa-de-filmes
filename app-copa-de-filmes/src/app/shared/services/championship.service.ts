import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChampionshipService {
    private championshipResults: Movie[];

    constructor(private httpClient: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(environment.apiUrl);
    }

    startChampionship(movies: Movie[]) {
        return this.httpClient.post<Movie[]>(environment.apiUrl, movies).subscribe(
            result => this.championshipResults = result,
            error => console.error('Erro em startChampionship', error)
        );
    }

    getChampionshipResults(): Movie[] {
        return this.championshipResults;
    }
}
