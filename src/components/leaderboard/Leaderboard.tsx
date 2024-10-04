import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useLeaderboard } from "./useLeaderboard";
import "./Leaderboard.css";

export const Leaderboard = () => {
  const players = useLeaderboard();

  return (
    <>
      <h1>Welcome to the vocabulary quiz!</h1>
      <div className="leaderboard-container">
        <h2>Real-Time Leaderboard</h2>
        {players.map((player) => (
          <div className="player-row" key={player.id}>
            <span>{player.name}</span>
            <span>{player.score}</span>
          </div>
        ))}
        <ToastContainer />
      </div>
    </>
  );
};

