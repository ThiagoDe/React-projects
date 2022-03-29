import React from 'react';
import styled from 'styled-components';
import './TodoListItem.css'

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;`

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`



const TodoListItem = ({todo, onRemovePressed, onCompletedPressed}) => {
    // console.log(todo,'todo')
    return (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <ButtonsContainer>
            {todo.isCompleted ? null : <button 
                className='completed-button'
                onClick={() => onCompletedPressed(todo.id)}
                >Mark As Completed</button>}
            <button 
                onClick={() => onRemovePressed(todo.id)}
            className='remove-button'>Remove</button>
        </ButtonsContainer>

    </TodoItemContainer>)
}

export default TodoListItem;