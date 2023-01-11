import ActorCard from "./ActorCard";

const Details = ({ film }) => {

  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <>
      <div className="div-acteurs">
        <div className="content">
          {film.actors.map((acteur) => (
            <ActorCard key={acteur.name} acteur={acteur} />
          ))}
          <div className="div-infos">
            <h1>Titre d'origine</h1>
            <h2>{film.original_title}</h2>
            <h1>Annee de sortie</h1>
            <h2>{film.release_date.slice(0, 4)}</h2>
            <h1>Langue d'origine</h1>
            <h2>{film.original_language.toUpperCase()}</h2>
            <h1>{film.budget > 0 && "Budget (2022)"}</h1>
            <h2>{film.budget > 0 && "$" + numberFormat(film.budget)}</h2>
            <h1>{film.budget > 0 && "Recette (2022)"}</h1>
            <h2>{film.budget > 0 && "$" + numberFormat(film.revenue)}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
