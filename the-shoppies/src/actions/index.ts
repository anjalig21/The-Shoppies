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

export const setNomination = (payload: movieInterface[]) => {
  return {
    type: "setNomination",
    payload: payload
  }
}

export const setChangeBool = () => {
  return {
    type: "setChangeBool",
  };
};

export const setBanner = (payload: boolean) => {
  return {
    type: "setBanner",
    payload: payload
  };
};
