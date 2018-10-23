import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../shared/services/championship.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  movieResults: Movie[];

  constructor(private championshipService: ChampionshipService) { }

  ngOnInit() {
    this.getChampionshipResults();
  }

  getChampionshipResults() {
    this.movieResults = this.championshipService.getChampionshipResults();
  }
}
