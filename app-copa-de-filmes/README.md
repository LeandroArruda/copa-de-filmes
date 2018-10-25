# AppCopaDeFilmes

Sistema para selecionar um campeonato entre filmes e depois exibir os 2 primeiros colocados.
Consumindo 2 APIs diferentes, uma API para listar o filmes e a API que está junto nesse Workspace para realizar o processo do campeonato e devolver os 2 primeiros

## Development servers (Front and back)

Rodar primeiro a API, navegando até a pasta 'CopaDeFilmes' e executando dotnet run.

Rodar com `npm start`, criei um proxy para não dar o erro de CORS.


## Comentários

Não consegui finalizar a tela de exibição de resultado. Fiz uma simulação com o caso de teste descrito no pdf e deu o mesmo resultado.
Não comecei a montar os testes unitários. No meu dia a dia uso o Nunit.

Sobre a solução que montei. Fiz em DDD para mostrar como acredito ser a melhor forma de escrever uma api seguindo o DDD:
Uso de domain services, já que a regra em questão faz parte do domínio. Não acabou sendo o caso, mas sempre que possível coloco métodos nas classes para não ficaram anêmicas. Não coloquei porque entendi que não era a entidade Movie que detêm a lógica de fazer o campeonato. Pensando agora talvez criado um Campeonato contendo como Property uma lista de filmes e tendo mais 2 properties: FirstPlace e SecondPlace, e ela contendo o método de cálculo do campeonato em questão. De qualquer modo, também acredito que nesse caso em que o domínio é bem pequeno e não complexo, a solução mais interessante seria usar uma Azure Function e desenhado mais simples, n usando o DDD.

Agradeço o tempo de vocês e a oportunidade, mesmo que eu não tenha tido as condições ideais!

Obrigado