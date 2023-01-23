import * as React from "react";
import { useTodos } from "./useTodos";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { ReactComponent as DeleteIcon } from "./delete.svg";

const StyledTodo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem;
  inline-size: 100%;
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

const StyledInput = styled.input`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  flex: 1;
  &::placeholder {
    color: gray;
  }
`;

const AddButton = styled.button`
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  inline-size: 100%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  inline-size: 18rem;
  min-block-size: 20rem;
  outline: 2px solid ${(props) => props.theme.color};
`;

const StyledDeleteButton = styled.button`
  color: ${(props) => props.theme.background};
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  padding: 0.4rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  inline-size: 100%;
`;

export const Todos = () => {
  const todos = useTodos();
  return (
    <Container>
      <StyledList>
        {Object.entries(todos.data).map(([id, value]) => (
          <StyledTodo key={id}>
            <Checkbox
              id={id}
              checked={todos.checkedToday(id)}
              onChange={todos.handleCheck}
            />
            <StyledInput
              id={id}
              className={id}
              type="text"
              placeholder="enter some text"
              value={value.title}
              onChange={todos.handleChange}
              onKeyDown={todos.handleKeyDown}
            />
            <StyledDeleteButton id={id} onClick={todos.handleDelete}>
              <DeleteIcon />
            </StyledDeleteButton>
          </StyledTodo>
        ))}
      </StyledList>
      <AddButton onClick={todos.handleAdd}>add something new</AddButton>
    </Container>
  );
};
