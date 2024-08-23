import ky from "ky";

const instance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  cache: "no-cache",
});

export default instance;
