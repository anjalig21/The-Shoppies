import movieInterface from "../Models/movies";

export const setMovList = (payload: movieInterface[]) => {
  return {
    type: "setList",
    payload: payload,
  };
};

export const setBoolTrigger = () => {
  return {
    type: "setTrigger",
  };
};
