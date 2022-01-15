import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addTodo }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: function (text) {
            dispatch(actionCreators.addTodo(text));
        },
    };
}

// getCurrentState 함수를 사용하여 store로부터 state의 값을 가지고 옴
export default connect(mapStateToProps, mapDispatchToProps)(Home);
