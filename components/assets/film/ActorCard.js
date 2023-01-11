const CardActors = ({ acteur }) => {
  var lienimage = "https://image.tmdb.org/t/p/original";
  return (
    <div>
        <img src={acteur.profile_path !== null ? lienimage + acteur.profile_path : "/assets/img/tools/unknown_user.jpg"} alt={acteur.name}></img>
      <h1>{acteur.name}</h1>
      <h2>{acteur.character}</h2>
    </div>
  );
};
export default CardActors;
