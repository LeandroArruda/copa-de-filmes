using System.Collections.Generic;
using System.Linq;
using CopaDeFilmes.Domain.Interfaces;
using CopaDeFilmes.Domain.MovieAggregate;

namespace CopaDeFilmes.Domain.Services
{
    public class ChampionshipService : IChampionshipService
    {
        public List<Movie> IdentifyTheWinner(List<Movie> movies)
        {
            var afterFirstRound = FirstRound(movies);
            var result = OtherRounds(afterFirstRound);
            return result;
        }

        public List<Movie> FirstRound(List<Movie> movies)
        {
            var firstRoundWinnersList = new List<Movie>();
            for (int i = 0; i < movies.Count / 2; i++)
            {
                firstRoundWinnersList.Add(GetWinnerMovie(movies[i], movies[7 - i]));
            }

            return firstRoundWinnersList;
        }

        public List<Movie> OtherRounds(List<Movie> movies)
        {
            var winnersList = new List<Movie>();
            for (int i = 0; i < movies.Count; i+=2)
            {
                winnersList.Add(GetWinnerMovie(movies[i], movies[i + 1]));
            }

            if (winnersList.Count == 2)
            {
                var winner = GetWinnerMovie(winnersList[0], winnersList[1]);
                winner.SetPosition(1);
                var second = winnersList.Find(m => m.Id != winner.Id);
                second.SetPosition(2);
                return new List<Movie>(){ winner, second };
            }
            else
            {
                OtherRounds(winnersList);
            }
            return winnersList;

        }

        private Movie GetWinnerMovie(Movie movie1, Movie movie2)
        {
            if (movie1.Nota > movie2.Nota)
            {
                return movie1;
            }
            else if (movie2.Nota > movie1.Nota)
            {
                return movie2;
            }
            else
            {
                var listMovies = new List<Movie>() { movie1, movie2 };
                return listMovies.OrderBy(m => m.Titulo).FirstOrDefault();
            }
        }
    }
}