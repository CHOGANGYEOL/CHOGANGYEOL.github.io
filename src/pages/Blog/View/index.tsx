import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { useGetBlogItem } from "../../../services/blog/queries";
import styled from "styled-components";

const BlogView = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetBlogItem({ id: Number(id) });

  if (isSuccess)
    return (
      <Wrapper>
        <MDEditor.Markdown
          source={data.data}
          wrapperElement={{ "data-color-mode": "light" }}
        />
      </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 2.4rem;
`;

export default BlogView;
