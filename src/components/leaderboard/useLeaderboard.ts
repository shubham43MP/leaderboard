import { useEffect, useRef, useState } from "react";
import { Player } from "../../utils/common.type";
import { initialPlayers } from "../../api/initialPlayers";
import { newPlayer } from "../../utils/newPlayer";
import { updateScore } from "../../utils/updateScore";

export const useLeaderboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    setPlayers(initialPlayers);

    newPlayer(setPlayers);
  }, []);

  useEffect(() => {
    const updateRandomPlayerScore = updateScore(setPlayers);

    const scoreUpdateInterval = setInterval(updateRandomPlayerScore, 5000);

    return () => clearInterval(scoreUpdateInterval);
  }, []);

  return players;
};
