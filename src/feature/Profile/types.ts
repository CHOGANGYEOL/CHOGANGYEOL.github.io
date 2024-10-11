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
  details: React.ReactNode[] | Detail[];
  tags: string[];
}>;

export type { User, Education, Works, Detail };
