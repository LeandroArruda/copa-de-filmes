using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CopaDeFilmes.Domain.Interfaces;
using CopaDeFilmes.Domain.MovieAggregate;
using CopaDeFilmes.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CopaDeFilmes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChampionshipController : ControllerBase
    {
        private readonly IChampionshipService _championshipService; 
        private readonly IMapper _mapper;

        public ChampionshipController(IChampionshipService championshipSerivice, IMapper mapper)
        {
            _championshipService = championshipSerivice;
            _mapper = mapper;
        }

        // POST api/Championship
        [HttpPost]
        public List<MovieViewModel> Post(List<MovieViewModel> models)
        {
            try
            {
            var result = _championshipService.IdentifyTheWinner(_mapper.Map<List<MovieViewModel>,List<Movie>>(models));
            return _mapper.Map<List<MovieViewModel>>(result);
            }
            catch(Exception ex)
            {
                return new List<MovieViewModel>();
            }
        }
    }
}
