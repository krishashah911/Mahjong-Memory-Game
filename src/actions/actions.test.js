import * as actions from "./actions";
import * as types from "./actionTypes";
import { cards } from "./actions";

describe("actions", () => {
  it("should create an action to handle Login Visibility", () => {
    const expectedAction = {
      type: types.HANDLE_LOGIN_VISIBILITY,
      payload: false
    };
    expect(actions.handleLoginVisibilityAction(false)).toEqual(expectedAction);
  });
  it("should create an action to game finishing", () => {
    const expectedAction = {
      type: types.GAME_FINISHED,
      payload: false
    };
    expect(actions.gameFinishedAction(false)).toEqual(expectedAction);
  });
  it("should create an action to define username", () => {
    const expectedAction = {
      type: types.DEFINE_USERNAME,
      payload: "username"
    };
    expect(actions.defineUserNameAction("username")).toEqual(expectedAction);
  });
  it("should create an action to define Score Board", () => {
    const userInfo = {
      userName: "username",
      score: "10"
    };
    const expectedAction = {
      type: types.UPDATE_SCOREBOARD,
      payload: userInfo
    };
    expect(actions.defineScoreBoardAction(userInfo)).toEqual(expectedAction);
  });
  it("should create an action to define Cards", () => {
    const expectedAction = {
      type: types.DEFINE_CARDS,
      payload: cards
    };
    expect(actions.defineCardsAction()).toEqual(expectedAction);
  });
  it("should create an action to define game score", () => {
    const expectedAction = {
      type: types.DEFINE_GAME_SCORE,
      payload: "10"
    };
    expect(actions.defineGameScoreAction("10")).toEqual(expectedAction);
  });
});
