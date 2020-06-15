import React from 'react';
const PlayersComponent = (props) => {
    let players = props.players;
    console.log(players);
    return (
        <div>
            <h1 className="dispaly-4 font-weight-bold text-primary text-uppercase my-4">List users</h1>
            <div className="playersBlock">
                {players.map(player => (
                    <div className="card">
                        <img className="image-card-top" src={player.photo} alt={player.name} />
                        <div className="card-body">
                            <h1 className="card-title">{player.name}</h1>
                            <p className="card-title">total runs:{player.runs}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlayersComponent