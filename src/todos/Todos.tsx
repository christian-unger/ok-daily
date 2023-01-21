import * as React from "react";
import { useTodos } from "./useTodos";
import styled from "styled-components";

const StyledInput = styled.input`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  &::placeholder {
    color: gray;
  }
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

const AddButton = styled.button`
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  inline-size: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-block-size: 20rem;
  inline-size: 100%;
  outline: 1px solid ${(props) => props.theme.color};
`;

const StyledCheckbox = styled.input`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

export const Todos = () => {
  const todos = useTodos();
  return (
    <main>
      <Container>
        <ul>
          {Object.entries(todos.data).map(([id, value]) => (
            <li key={id}>
              <StyledInput
                id={id}
                type="text"
                placeholder="enter some text"
                value={value.title}
                onChange={todos.handleChange}
                onKeyDown={todos.handleKeyDown}
              />
              <StyledCheckbox
                type="checkbox"
                name=""
                id={id}
                defaultChecked={todos.checkedToday(id)}
                onChange={todos.handleCheck}
              />
              <button id={id} onClick={todos.handleDelete}>
                x
              </button>
            </li>
          ))}
        </ul>
        <section>
          <AddButton onClick={todos.handleAdd}>Add Something New</AddButton>
        </section>
      </Container>
    </main>
  );
};
