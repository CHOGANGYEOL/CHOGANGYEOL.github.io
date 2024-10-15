import instance from "../../lib/ky/instance";
import { BlogItem, BlogItemPK, PutBlogItem } from "./types";

const BASE_PATH = "blogs";

export default {
  getBlogItems: async (): Promise<Array<BlogItem>> =>
    instance.get(BASE_PATH).json(),
  getBlogItem: async ({ id }: BlogItemPK): Promise<BlogItem> =>
    instance.get(`${BASE_PATH}/${id}`).json(),
  putBlogItem: async (params: PutBlogItem): Promise<string> =>
    instance.put(BASE_PATH, { body: JSON.stringify(params) }).json(),
};
