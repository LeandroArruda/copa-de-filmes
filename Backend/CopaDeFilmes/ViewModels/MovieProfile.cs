using System.Collections.Generic;
using AutoMapper;
using CopaDeFilmes.Domain.MovieAggregate;

namespace CopaDeFilmes.ViewModels
{
    public class MovieProfile : Profile
    {
        public MovieProfile()
        {
            CreateMap<Movie, MovieViewModel>();
            CreateMap<MovieViewModel, Movie>();
        }
    }
}