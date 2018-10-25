import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../shared/services/championship.service';
import { Movie } from '../../shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  title = 'Fase de Seleção';
  movies: Movie[];
  selectedMovies = [];

  constructor(private championshipService: ChampionshipService,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.getMoviesSelection();
  }

  getMoviesSelection() {
    this.movieService.getMovies().subscribe(
      res => this.movies = res,
      error => console.error('Erro em getMoviesSelection', error)
    );
  }

  addMovie(movie) {
    this.selectedMovies.push(movie);
  }

  startChampionship() {
    this.championshipService.startChampionship(this.selectedMovies);
    this.router.navigate(['/resultado']);
  }

}
