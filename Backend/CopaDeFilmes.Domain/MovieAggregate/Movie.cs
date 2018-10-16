using CopaDeFilmes.Domain.Common;

namespace CopaDeFilmes.Domain.MovieAggregate
{
    public class Movie : AggregateRoot
    {
        public string Titulo { get; private set; }
        public int Ano { get; private set; }
        public double Nota { get; private set; }
        public int Position { get; private set; }

        public void SetPosition(int position)
        {
            Position = position;
        }
    }
}