import '../styles/ModalCard.css';
import { v4 as uuidv4 } from "uuid";

function ModalCard() {
    const lStorage = JSON.parse(localStorage.getItem('tools'));
  return (
    <div className="modal-container">
        {
            lStorage.map(({ name, icon, color, link}, index) => {
                if (index === 0) {
                    return(
                        <div key={uuidv4()} className="modal-element">
                            <div className="modal">
                                <div className="modal-img" style={{backgroundColor: `${color}`}}>
                                    <img src={icon} alt={name} />
                                </div>
                                
                                <div>
                                    <span>{name}</span>
                                    <button className="modal-link" type="button"><a className="modal-acess" href={link} target="_blank" rel="noreferrer">Acessar</a></button>
                                </div>
                            </div>
                            <h3>ÚLTIMAS FERRAMENTAS VISUALIZADAS</h3>
                        </div>
                    )
                }
                return(
                    <div key={uuidv4()} className="modal-view" >
                        <div className="modal-img-view" style={{ backgroundColor: `${color}` }}>
                            <img src={icon} alt={name}/>
                            <span>{name}</span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default ModalCard;
