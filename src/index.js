import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// state = 0 을 통해 initializing(default 값을 정의함)
const countModifier = (count = 0) => {
    console.log(state);
    return count;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());
