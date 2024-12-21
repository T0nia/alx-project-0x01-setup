import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { PostData } from "@/interfaces";
import { useState } from "react";

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts: initialPosts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState(initialPosts);
    const [post, setPost] = useState<PostData | null>(null);

    const handleAddPost = (newPost: PostData) => {
        const postWithId = { ...newPost, id: posts.length + 1 };
        setPosts([postWithId, ...posts]);
        setPost(postWithId);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Post Content</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white"
                    >
                        Add Post
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            {...post}
                        />
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <PostModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts
        }
    };
}

export default Posts;