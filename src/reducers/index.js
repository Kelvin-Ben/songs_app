import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Escapade", duration: "4:50" },
    { title: "Vogue", duration: "3:15" },
    { title: "Step by Step", duration: "3:10" },
    { title: "Vision of love", duration: "5:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
