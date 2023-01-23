import * as React from "react";
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  cursor: pointer;
`;

type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ id, checked, onChange }: CheckboxProps) => {
  return (
    <label>
      <HiddenCheckbox id={id} checked={checked} onChange={onChange} />
      <StyledCheckbox>{checked ? "✅" : "🔲"}</StyledCheckbox>
    </label>
  );
};
