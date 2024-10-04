import { toast } from "react-toastify";
import { Player } from "../utils/common.type";

type SetPlayers = React.Dispatch<React.SetStateAction<Player[]>>;

export const updateScore = (setPlayers: SetPlayers) => {
  return () => {
    setPlayers((prevPlayers) => {
      if (prevPlayers.length === 0) return prevPlayers;

      const randomIndex = Math.floor(Math.random() * prevPlayers.length);

      const updatedPlayers = prevPlayers.map((player, index) => {
        if (index === randomIndex) {
          const prevScore = player.score;
          const updatedScore = player.score + Math.floor(Math.random() * 16) + 5;
          toast.success(`${player.name} gained ${updatedScore - prevScore} points`,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
              className: "custom-text",
            }
          );
          return { ...player, score: updatedScore };
        }
        return player;
      });

      return updatedPlayers.sort((a, b) => b.score - a.score);
    });
  };
};
