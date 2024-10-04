import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { newPlayers } from "../api/newPlayers";
import { Player } from "./common.type";

type SetPlayers = Dispatch<SetStateAction<Player[]>>;

export const newPlayer = (setPlayers: SetPlayers) => {
  newPlayers.forEach((player, index) => {
    setTimeout(() => {
      toast.info(`${player.name} just joined the quiz`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setPlayers((prevPlayers: Player[]) => {
        const updatedPlayers = [...prevPlayers, player];
        return updatedPlayers.sort((a, b) => b.score - a.score);
      });
    }, (index + 1) * 3000);
  });
};
