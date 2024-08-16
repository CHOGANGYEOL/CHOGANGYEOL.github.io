import { Link } from "react-router-dom";
import { useGetBlogItems } from "../../services/blog/queries";

const Blog = () => {
  const { data, isSuccess } = useGetBlogItems();
  if (isSuccess) {
    return (
      <>
        {data.map((el) => (
          <Link to={`${el.id}`}>{el.title}</Link>
        ))}
      </>
    );
  }
};

export default Blog;
