import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Timer from "react-compound-timer";
import Board from "../Board";
import ScoreBoard from "../ScoreBoard";
import Login from "../Login";
import {
  gameFinishedAction,
  defineScoreBoardAction,
  defineCardsAction,
  defineGameScoreAction
} from "../../actions/actions";

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [disabled, setDisabled] = useState(false);
  const loginVisibility = useSelector(state => state.loginVisibility);
  const userName = useSelector(state => state.userName);
  const isGameFinished = useSelector(state => state.isGameFinished);
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    resizeBoard();
    dispatch(defineCardsAction());
  }, [dispatch]);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    return () => window.removeEventListener("resize", resizeListener);
  });

  useEffect(() => {
    checkGameStatus();
  });

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  const sameCardClickedTwice = id => flipped.includes(id);

  const isAMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const checkGameStatus = () => {
    if (
      cards.length === solved.length &&
      !isGameFinished &&
      cards.length !== 0
    ) {
      setSolved([]);
      const score = document.getElementById("score");
      dispatch(gameFinishedAction(true));
      if (score) {
        const userInfo = {
          userName: userName,
          score: score.innerHTML
        };
        dispatch(defineGameScoreAction(userInfo.score));
        dispatch(defineScoreBoardAction(userInfo));
      }
    }
  };

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped(flipped => [...flipped, id]);
      setDisabled(false);
    } else {
      if (sameCardClickedTwice(flipped, id)) return;
      setFlipped(flipped => [...flipped, id]);
      if (isAMatch(id)) {
        setSolved([...solved, ...flipped, id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
  };

  return (
    <div>
      <h1>Mahjong Memory Game</h1>
      {!isGameFinished && !loginVisibility && <Login />}
      {!isGameFinished && loginVisibility && <h3>UserName: {userName}</h3>}
      {!isGameFinished && loginVisibility && (
        <div>
          <Timer>
            <div style={{ display: "flex", color: "#c82333" }}>
              Point :
              <div id="score" style={{ marginLeft: `10px` }}>
                <Timer.Seconds />
              </div>
            </div>
          </Timer>
        </div>
      )}
      {loginVisibility && !isGameFinished && (
        <Board
          cards={cards}
          flipped={flipped}
          solved={solved}
          dimension={dimension}
          handleClick={handleClick}
          disabled={disabled}
        />
      )}
      {isGameFinished && <ScoreBoard />}
    </div>
  );
}
