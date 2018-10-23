import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../shared/services/championship.service';
import { Movie } from '../../shared/models/movie.model';

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
    this.getMoviesSelection();
  }

  getMoviesSelection() {
    this.championshipService.getMovies().subscribe(
      res => this.movies = res,
      error => console.error('Erro em getMoviesSelection', error)
    );
  }

  addMovie(movie) {
    this.selectedMovies.push(movie);
  }

  startChampionship() {
    this.championshipService.startChampionship(this.selectedMovies);
  }

}
