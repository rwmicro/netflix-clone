import { useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";


const Popup = ({ genre, film }) => {
  var posterPath = "https://image.tmdb.org/t/p/original";
  const [statut, setStatut] = useState(false);
  const toggleModal = () => {
    setStatut(!statut);
  };
/*
  if (statut) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  */
  return (
    <>
      <button onClick={toggleModal} className="btn-film">
        <i className="far fa-play-circle" aria-hidden="true"></i> {genre}
      </button>

      {genre === "Bande Annonce" && statut && (
        <div className="popup">
          <div onClick={toggleModal} className="popup-bg"></div>
          <div className="popup-content">
            <button className="close-popup" onClick={toggleModal}>
              X
            </button>
            <Plyr
              source={{
                type: "video",
                autoplay: true,
                sources: [
                  {
                    src: film.trailer.key,
                    provider: "youtube",
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
      {genre === "Regarder" && statut && (
        <div className="popup">
          <div onClick={toggleModal} className="popup-bg"></div>
          <div className="popup-content">
            <button className="close-popup" onClick={toggleModal}>
              X
            </button>
            <Plyr
              source={{
                type: "video",
                autoplay:true,
                loop:true,
                sources: [
                  {
                    src: "https://www.youtube.com/watch?v=xUqMkLgu-3s",
                    provider:"youtube"
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Popup;
