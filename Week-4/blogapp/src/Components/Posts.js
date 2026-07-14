import React from 'react';
import Post from '../Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null,
        };
    }

    async loadPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Unable to load posts (${response.status})`);
        }

        const data = await response.json();
        return data.map(({ id, title, body }) => new Post(id, title, body));
    }

    componentDidMount() {
        this.loadPosts()
            .then((posts) => this.setState({ posts, loading: false }))
            .catch((error) => this.setState({ error, loading: false }));
    }

    componentDidCatch(error, info) {
        console.error('Posts component error:', error, info);
        this.setState({ error, loading: false });
    }

    render() {
        const { posts, loading, error } = this.state;

        if (loading) {
            return <p>Loading posts...</p>;
        }

        if (error) {
            return <p role="alert">Could not load posts: {error.message}</p>;
        }

        return (
            <section>
                <h1>Blog Posts</h1>
                {posts.map((post) => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                ))}
            </section>
        );
    }
}

export default Posts;
