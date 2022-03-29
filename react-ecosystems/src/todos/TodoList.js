import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import {  
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
    } from './selectors';
import styled from 'styled-components';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLodingTodos }) => {
    useEffect(() => {
        startLodingTodos()
    }, [])

    const loadingMessage = <div>Loading todos...</div>

        const content = (
            <ListWrapper>
                <NewTodoForm />
                <h3>Incomplete:</h3>
                {incompleteTodos.map(todo => (
                    
                    <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />)
                )}
                <h3>Completed:</h3>
                {completedTodos.map(todo => (
                    
                    <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />)
                )}

            </ListWrapper>
    )
    return isLoading ? loadingMessage : content;
}

const mSTP = state => {
    return {
        isLoading: getTodosLoading(state),
        completedTodos: getCompletedTodos(state),
        incompleteTodos: getIncompleteTodos(state)
    }
}

const mDTP = dispatch => ({
    startLodingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
})

export default connect(mSTP, mDTP)(TodoList)