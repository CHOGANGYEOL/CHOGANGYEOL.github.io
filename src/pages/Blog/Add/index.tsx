import { useCallback, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "../../../components/Button";
import { usePutBlogItem } from "../../../services/blog/queries";
import { Loading } from "../../../components/Common/Loading";
import { toast } from "react-toastify";

const BlogAdd = () => {
  const [value, setValue] = useState("");
  const { mutate, isPending } = usePutBlogItem();
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        mutate(
          {
            id: 1,
            data: value,
            category: null,
            title: "VITE",
          },
          {
            onSuccess: (result) => {
              toast.success(result);
            },
            onError: (err) => {
              toast.error(err.message);
            },
          }
        );
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      }
    },
    [value]
  );
  return (
    <form {...{ onSubmit }}>
      {isPending && <Loading />}
      <MDEditor
        value={value}
        onChange={(value) => {
          setValue(value!);
        }}
      />
      <Button type="submit">수정</Button>
    </form>
  );
};

export default BlogAdd;
