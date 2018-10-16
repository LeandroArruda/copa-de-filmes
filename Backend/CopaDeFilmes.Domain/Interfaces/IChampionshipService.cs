using System.Collections.Generic;
using CopaDeFilmes.Domain.MovieAggregate;

namespace CopaDeFilmes.Domain.Interfaces
{
    public interface IChampionshipService
    {
        List<Movie> IdentifyTheWinner(List<Movie> movies);
    }
}