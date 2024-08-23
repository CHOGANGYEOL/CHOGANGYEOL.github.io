import instance from "../../lib/ky/instance";
import { BlogItem, BlogItemPK, PutBlogItem } from "./types";

const BASE_PATCH = "blogs";

export default {
  getBlogItems: async (): Promise<Array<BlogItem>> =>
    instance.get(BASE_PATCH).json(),
  getBlogItem: async ({ id }: BlogItemPK): Promise<BlogItem> =>
    instance.get(`${BASE_PATCH}/${id}`).json(),
  putBlogItem: async (params: PutBlogItem): Promise<string> =>
    instance.put(BASE_PATCH, { body: JSON.stringify(params) }).json(),
};
