import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
    posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts: initialPosts }) => { // Changed from users to posts
    const [isModalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState(initialPosts);

    const handleAddUser = (newUser: UserData) => {
        const userWithId = { ...newUser, id: posts.length + 1 };
        setPosts([userWithId, ...posts]);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">Users Directory</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-colors"
                    >
                        Add User
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((user) => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <UserModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return {
        props: {
            posts
        }
    };
}

export default Users;