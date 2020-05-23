import { DEFINE_CARDS } from "./actionTypes";
import initializeDeck from "../utils";
import { DEFINE_GAME_SCORE } from "./actionTypes";
import { UPDATE_SCOREBOARD } from "./actionTypes";
import { DEFINE_USERNAME } from "./actionTypes";
import { GAME_FINISHED } from "./actionTypes";
import { HANDLE_LOGIN_VISIBILITY } from "./actionTypes";
export const cards = initializeDeck();

export function handleLoginVisibilityAction(state) {
  return { type: HANDLE_LOGIN_VISIBILITY, payload: state };
}

export function gameFinishedAction(state) {
  return { type: GAME_FINISHED, payload: state };
}

export function defineUserNameAction(text) {
  return { type: DEFINE_USERNAME, payload: text };
}

export function defineScoreBoardAction(state) {
  return { type: UPDATE_SCOREBOARD, payload: state };
}

export function defineCardsAction() {
  return { type: DEFINE_CARDS, payload: cards };
}

export function defineGameScoreAction(score) {
  return { type: DEFINE_GAME_SCORE, payload: score };
}
