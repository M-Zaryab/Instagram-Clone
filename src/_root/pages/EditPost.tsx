import PostForm from "@/components/forms/PostForm";
import { useGetPostById } from "@/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");

  if (isPending) return <Loader />;

  return (
    <section className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            height={36}
            width={36}
            alt="add"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full ">Edit Post</h2>
        </div>

        {isPending ? <Loader /> : <PostForm action="Update" post={post} />}
      </div>
    </section>
  );
};

export default EditPost;
