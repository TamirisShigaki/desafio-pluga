import React from 'react';

function ModalCard() {
    const lStorage = JSON.parse(localStorage.getItem('tools'));
  return (
    <div>
        {
            lStorage.map(({ name, icon, color, link }, index) => {
                if (index === 0) {
                    return(
                        <div>
                            <div>
                                <img src={icon} alt={name} />
                            </div>
                            <div>
                                <span>{name}</span>
                                <button type="button"><a href={link} target="_blank" rel="noreferrer">Acessar</a></button>
                            </div>
                            <h3>ÚLTIMAS FERRAMENTAS VISUALIZADAS</h3>
                        </div>
                    )
                }
                return(
                    <div>
                        <div>
                            <div style={{ backgroundColor: `${color}` }}>
                                <img src={icon} alt={name}/>
                            </div>
                            
                            <div>
                                <span>{name}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default ModalCard;
