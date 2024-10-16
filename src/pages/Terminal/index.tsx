import { FormEvent, useState } from "react";

import styled from "styled-components";

import { COMMANDS } from "../../feature/Terminal/const";
import { useTerminal } from "../../feature/Terminal/hooks";

const Terminal = () => {
  const { logs, onSubmitTerminal } = useTerminal();
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
    onSubmitTerminal(value);
  };

  return (
    <Section>
      <h3>Welcome to CHOGANGYEOL terminal!</h3>
      <div className="divider" />
      <ul className="command">
        {COMMANDS.map((command) => (
          <li key={"command--" + command}>{command}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <ul>
          {logs.map((log, idx) => (
            <li key={"log" + idx}>{log}</li>
          ))}
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </ul>
      </form>
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  max-width: 95rem;
  margin: 0 auto;
  padding: 12rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
`;

export default Terminal;
