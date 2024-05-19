export type Commands = "whoami" | "pwd" | "exit" | "ls" | "cd" | "clear";
export const COMMANDS: Array<Commands> = [
  "whoami",
  "pwd",
  "exit",
  "ls",
  "cd",
  "clear",
];
export type Path = "blog" | "main" | "profile" | "project" | "terminal" | "~";

export const PATH: Array<Path> = [
  "blog",
  "main",
  "profile",
  "project",
  "terminal",
  "~",
];

export const ERROR_MESSAGE = {
  CD: "cd: no such file or directory: ",
  NOT_FOUNT: "command not found: ",
} as const;

export const WHOAMI = "CHOGANGYEOL" as const;
