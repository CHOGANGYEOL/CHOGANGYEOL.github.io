import React from "react";
import { Detail } from "./types";

// 타입 가드 함수
export const isObjectDetail = (
  data: React.ReactNode | Detail
): data is { title: React.ReactNode; details: React.ReactNode[] } => {
  return typeof data === "object" && "title" in data! && "details" in data;
};
