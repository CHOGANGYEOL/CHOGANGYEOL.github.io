interface BlogItem {
  id: number;
  title: string;
  data: string;
  category: string | null;
  updatedAt: string;
}

type PutBlogItem = Omit<BlogItem, "updatedAt">;

type BlogItemPK = Pick<BlogItem, "id">;

export type { BlogItem, PutBlogItem, BlogItemPK };
