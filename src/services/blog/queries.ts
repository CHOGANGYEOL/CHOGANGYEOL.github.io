import { useMutation, useQuery } from "@tanstack/react-query";
import services from "..";

export const BLOG_KEYS = {
  all: ["blog"] as const,
  getItems: () => [...BLOG_KEYS.all, "items"] as const,
  getItem: ({ id }: Parameters<typeof services.blog.getBlogItem>[0]) =>
    [...BLOG_KEYS.all, "item", id] as const,
  putItem: () => [...BLOG_KEYS.all, "put-item"] as const,
} as const;

export const useGetBlogItems = () =>
  useQuery({
    queryKey: BLOG_KEYS.getItems(),
    queryFn: async () => await services.blog.getBlogItems(),
  });

export const useGetBlogItem = (
  params: Parameters<typeof services.blog.getBlogItem>[0]
) =>
  useQuery({
    queryKey: BLOG_KEYS.getItem(params),
    queryFn: async () => await services.blog.getBlogItem(params),
    enabled: !!params.id,
  });

export const usePutBlogItem = () =>
  useMutation<string, Error, Parameters<typeof services.blog.putBlogItem>[0]>({
    mutationKey: BLOG_KEYS.putItem(),
    mutationFn: async (params) => await services.blog.putBlogItem(params),
  });
