import reducer from "./reducer";
import * as types from "../actions/actionTypes";
import initialState from "../state";
import { cards } from "../actions/actions";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle DEFINE_USERNAME", () => {
    expect(
      reducer([], {
        type: types.DEFINE_USERNAME,
        payload: "firat"
      })
    ).toEqual({ userName: `firat` });
  });
  it("should handle HANDLE_LOGIN_VISIBILITY", () => {
    expect(
      reducer([], {
        type: types.HANDLE_LOGIN_VISIBILITY,
        payload: false
      })
    ).toEqual({ loginVisibility: false });
  });
  it("should handle DEFINE_GAME_SCORE", () => {
    expect(
      reducer([], {
        type: types.DEFINE_GAME_SCORE,
        payload: "10"
      })
    ).toEqual({ score: "10" });
  });
  it("should handle GAME_FINISHED", () => {
    expect(
      reducer([], {
        type: types.GAME_FINISHED,
        payload: true
      })
    ).toEqual({ isGameFinished: true });
  });
  it("should handle DEFINE_CARDS", () => {
    expect(
      reducer([], {
        type: types.DEFINE_CARDS,
        payload: cards
      })
    ).toEqual({ cards: cards });
  });
  it("should handle UPDATE_SCOREBOARD", () => {
    const userInfo = {
      userName: "username",
      score: "10"
    };
    expect(
      reducer(
        { scoreBoard: [] },
        {
          type: types.UPDATE_SCOREBOARD,
          payload: userInfo
        }
      )
    ).toEqual({ scoreBoard: [userInfo] });
  });
});
