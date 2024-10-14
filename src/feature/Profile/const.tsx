import type * as Types from "./types";

const USER: Types.User = {
  name: "CHO KANGYEOL",
  description:
    "반갑습니다.\n\n저는 크리에이터이자 개발자입니다. 주로 웹 개발을 담당하고 있으며, 항상 개발자와 사용자에게 최적의 경험을 전달 해주려는 자세로 개발하고 있습니다.\n\n스타트업에서 웹 서비스를 기획/개발/배포/운영하고 있으며, 비즈니스 가치를 고객에게 온전히 전달하기 위해서 다양한 직무의 구성원들과 능동적으로 커뮤니케이션 하며, 협업해왔습니다.\n\n일의 생산성을 높이는 것을 중요시하여 회사 혹은 팀의 프로세스를 개선 하려는 시도를 적극적으로 합니다.",
  idea: [
    "회사와 팀의 성장에 도움이 되는 일을 최우선시하며, 이를 통해 개발자와 비즈니스 가치를 창출합니다.",
    "능동적인 커뮤니케이션 및 협업으로 문제 해결과 비즈니스 성장에 적극적으로 뛰어들고 있습니다.",
    "기본은 항상 중요하다고 생각하고 있습니다.",
    "프론트엔드뿐만 아니라, 개발하는 모든 것을 즐깁니다.",
  ],
  email: "rkdduf06@icloud.com",
} as const;

const EDUCATION: Types.Education = {
  emoji: "📚",
  data: [
    {
      name: "안산 국제비즈니스 고등학교",
      startDate: "2013.03",
      endDate: "2015.03",
      details: ["비즈니스 일본어과 졸업"],
    },
    {
      name: "국가평생교육진흥원",
      startDate: "2022.02",
      endDate: "재학중",
      details: ["컴퓨터공학과 재학"],
    },
  ],
} as const;

const WORKS: Types.Works = {
  emoji: "💼",
  data: [
    {
      name: "(주)헬스포트",
      startDate: "2023.09",
      endDate: "2024.09",
      summary:
        "디지털 약국을 통한 고객과 약국간의 비대면 소통 및 약구매를 위한 어플을 개발합니다.",
      description:
        "CRM페이지의 테이블 및 채팅/주문, 자사 백오피스 페이지 개발및 유지보수, 회사 홈페이지를 담당하여 개발했습니다.",
      details: [
        {
          title:
            "TypeScript, Next.js를 활용하여 CRM페이지 및 자사 백오피스 페이지 개발및 유지보수",
          details: [
            "SendBird를 활용하여 양방향통신 채팅 시스템 구축 및 커스터마이징",
            "xlsx를 활용하여 Client Side에서 Excel 다운로드 기능 개발",
            "Chart.js를 활용해 백오피스 통계 페이지 개발",
            "백오피스 페이지 유지보수 및 리뉴얼",
          ],
        },
        {
          title: "Vanilla js로 제작 된 자사 홈페이지 유지보수 담당",
          details: [
            "하드코딩된 테이블형태를 JSON형태로 만들어, 관리할 수 있도록 develop",
            "MutationObserver를 활용하여 Vanilla js로 swipe 시스템 개발",
          ],
        },
      ],
      tags: [
        "Typescript",
        "Javascript",
        "React.js",
        "Next.js",
        "axios",
        "styled-components",
      ],
    },
    {
      name: "코스모스",
      startDate: "2023.03",
      endDate: "2023.09",
      summary:
        "실시간 스트리밍 서비스를 제공하여 방송/시청을 할 수 있는 웹앱을 개발합니다.",
      description:
        "초기 세팅부터 개발까지 프론트엔드의 모든 개발을 담당하여 개발했습니다.",
      details: [
        "입사 시 기존코드의 문제점을 여럿 발견 후 코드 자체의 리뉴얼이 필요하다 판단하여 주도하에 코드 전체 리뉴얼",
        "jwt token을 사용하여 로그인 시스템 구축",
        "axios interceptors를 통한 에러 핸들링 및 토큰 재발급 로직 개발",
        {
          title: "채팅 시스템 구축",
          details: [
            "websocket & stomp.js를 활용하여 양방향 통신 개발",
            "채팅 및 도네이션 시스템 개발",
          ],
        },
        "tanstack-query를 도입하여 api request에 대한 생명주기, 상태관리 로직 개발",
        "infinity-query와 react intersection observer를 활용한 무한스크롤 기능 구현",
        "AWS IVS Player를 커스텀하여 자사 플레이어 구축 후 스트리밍 서비스를 개발",
        "i18next를 이용한 다국어 서비스 개발(한국어/일본어/영어)",
        "i'm port(아임포트)를 활용하여 자사 결제시스템 구축",
        "Blob 형태로 다운로드 기능 구현",
        "백오피스 페이지 구축",
      ],
      tags: [
        "React.js",
        "Javascript",
        "axios",
        "tanstack-query",
        "styled-components",
        "webSocket",
        "stomp.js",
        "redux",
      ],
    },
  ],
} as const;

export const PROFILE_DATA = {
  USER,
  EDUCATION,
  WORKS,
} as const;
