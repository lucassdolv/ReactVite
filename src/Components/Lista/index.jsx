export const Lista = () => {
  const lista = [
    {
      nome: "Projeto novo",
      responsavel: "Fernando Carlos",
      valor: 1200,
    },
    {
      nome: "Projeto Sol",
      responsavel: "Lucas Santos",
      valor: 56151204508,
    },
    {
      nome: "Dog New",
      responsavel: "Guilhermo",
      valor: 4000,
    },
  ];

  console.log(lista);
  return (
    <main className="lista">
      <section className="content-list">
        <h1>Lista</h1>
        <img src="http://lorempixel.com.br/300/250" alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil
          magni facere enim! Impedit a maxime laboriosam. Sed necessitatibus
          vitae a soluta? Voluptatem facere asperiores laboriosam voluptates
          saepe, molestiae provident?
        </p>
      </section>
      <section className="list-names">
        <h1>Lista nomes</h1>

        {lista.map((item, index) => {
          return (
            <div className="lsitagem">
              <strong>Nome:</strong><span> {item.nome}</span>
              <strong>Responsavel</strong><span>{item.responsavel}</span>
              <strong>Valor</strong><span>{item.valor}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
};
