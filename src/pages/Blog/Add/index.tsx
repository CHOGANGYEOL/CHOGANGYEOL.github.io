import React, { useCallback, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "../../../components/Button";
import {
  useGetBlogItems,
  usePutBlogItem,
} from "../../../services/blog/queries";
import { Loading } from "../../../components/Common/Loading";
import { toast } from "react-toastify";
import { PutBlogItem } from "../../../services/blog/types";
import { useValues } from "../../../hooks/useValues";
import { VStack } from "../../../components/Common";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const INITIAL_VALUES: PutBlogItem = {
  id: -1,
  data: "",
  category: null,
  title: "",
} as const;

const BlogAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { values, onChangeValues, dispatch } = useValues({ ...INITIAL_VALUES });

  const { data, isSuccess } = useGetBlogItems();

  useEffect(() => {
    if (!state) navigate(-1);
    if (!isSuccess) return;
    const findIdx = data.reduce(
      (acc, cur) => (acc < cur.id ? cur.id : acc),
      INITIAL_VALUES.id
    );
    dispatch("SET", { id: findIdx + 1 });
  }, [data]);

  const { mutate, isPending } = usePutBlogItem();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        mutate(values, {
          onSuccess: (result) => {
            toast.success(result);
          },
          onError: (err) => {
            toast.error(err.message);
          },
        });
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      }
    },
    [values]
  );

  if (!state) return <React.Fragment />;

  return (
    <Form {...{ onSubmit }}>
      {isPending && <Loading />}
      <VStack $gap="1.2rem">
        <label htmlFor="id">id:</label>
        <input id="id" type="number" value={values.id} disabled name="id" />
        <label htmlFor="category">category</label>
        <input
          type="text"
          id="category"
          value={values.category ? values.category : ""}
          name="category"
          onChange={onChangeValues}
        />
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={values.title}
          name="title"
          onChange={onChangeValues}
        />
        <MDEditor
          value={values.data}
          onChange={(data) => {
            dispatch("SET", { data });
          }}
        />
      </VStack>
      <Button type="submit">수정</Button>
    </Form>
  );
};

const Form = styled.form`
  padding: 2.4rem;
`;

export default BlogAdd;
