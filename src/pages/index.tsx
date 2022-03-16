import { Container } from "@material-ui/core";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { ListPostsQuery, Post } from "../API";
import PostPreview from "../components/PostPreview";
import { useUser } from "../context/AuthContext";
import { listPosts } from "../graphql/queries";

export default function Home() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);

  // Make a request to the GraphQL API

  useEffect(() => {
    const fetchPostsFromApi = async (): Promise<Post[]> => {
      const allPosts = (await API.graphql({ query: listPosts })) as {
        data: ListPostsQuery;
        errors: any[];
      };

      if (allPosts.data) {
        setPosts(allPosts.data.listPosts.items as Post[]);
        return allPosts.data.listPosts.items as Post[];
      } else {
        throw new Error("Couldn't get posts, sorry");
      }
    };

    fetchPostsFromApi();
  }, []);

  console.log("User", user);
  console.log("Posts:", posts);
  return (
    <Container maxWidth="md">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Container>
  );
}

// Get all the posts on the ServerSide
// Since all users can read posts in our schema logic
// We can use the Api Key authorization method

// So we'll call some code to access our GraphQl Api on the serverSide
// Pass it to our function as props
// Render the posts on the homepage to like reddit posts..
