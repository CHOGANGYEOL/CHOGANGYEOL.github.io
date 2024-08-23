import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { useGetBlogItem } from "../../../services/blog/queries";
import styled from "styled-components";
import { Loading } from "../../../components/Common/Loading";
import { Paragraph, VStack } from "../../../components/Common";
import Theme from "../../../lib/styledComponents/Theme";

const BlogView = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetBlogItem({ id: Number(id) });

  if (isLoading) return <Loading />;

  if (isSuccess)
    return (
      <VStack style={{ padding: "2.4rem" }} $gap="3.6rem">
        <VStack>
          <Paragraph $color="gray_600">{data.category}</Paragraph>
          <Paragraph
            $font="headline_1"
            $fontWeight={700}
            style={{ borderBottom: `1px solid ${Theme.colors.gray[400]}` }}
          >
            {data.title}
          </Paragraph>
        </VStack>

        <Viewer
          source={data.data}
          // TODO: 다크모드 개발 후 삭제처리
          wrapperElement={{ "data-color-mode": "light" }}
        />
      </VStack>
    );
};

const Viewer = styled(MDEditor.Markdown)`
  li {
    list-style: unset;
  }
`;

export default BlogView;
