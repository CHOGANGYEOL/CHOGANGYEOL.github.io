type Language = "Javascript" | "Typescript" | "HTML5" | "CSS3";

type Framework = "Next.js";

type Library =
  | "React.js"
  | "axios"
  | "styled-components"
  | "tanstack-query"
  | "stomp.js"
  | "redux"
  | "redux-persist"
  | "i18next"
  | "JQuery";

type Protocol = "webSocket" | "HTTP";

type EtcSkills = "Figma" | "PhotoShop" | "illustrator" | "XD" | "Figma" | "Git";

type Skills = Language | Framework | Library | Protocol | EtcSkills;
interface User {
  name: string;
  description: string;
  idea: string[];
  email: string;
}

interface Data<T> {
  emoji: string;
  data: T[];
}

type Education = Data<{
  name: string;
  startDate: string;
  endDate: string;
  details: string[];
}>;

interface Detail {
  title: React.ReactNode;
  details: React.ReactNode[];
}

type Works = Data<{
  name: string;
  startDate: string;
  endDate: string;
  summary: string;
  description: string;
  details: (React.ReactNode | Detail)[];
  tags: Skills[];
}>;

export type { User, Education, Works, Detail };
