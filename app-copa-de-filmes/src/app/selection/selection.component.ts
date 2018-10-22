import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../services/championship.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  title = 'Fase de Seleção';
  movies: Movie[];
  selectedMovies = [];

  constructor(private championshipService: ChampionshipService) { }

  ngOnInit() {
    this.getMoviesSelection().subscribe(
      res => this.movies = res,
      error => console.error('Erro em getMoviesSelection', error)
    );
  }

  getMoviesSelection() {
    return this.championshipService.getMovies();
  }

  addMovie(movie) {
    this.selectedMovies.push(movie);
  }

}
