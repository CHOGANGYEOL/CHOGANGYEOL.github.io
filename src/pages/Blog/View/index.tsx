import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { useGetBlogItem } from "../../../services/blog/queries";

const BlogView = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetBlogItem({ id: Number(id) });

  if (isSuccess)
    return (
      <>
        <MDEditor.Markdown source={data.data} />
      </>
    );
};

export default BlogView;
