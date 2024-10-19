import { useState, useEffect } from 'react';
import ArticleCard from '../../card';

const accessToken = 'EAAWCp91tUGgBOxjyQZCxIeSx4IjmxwZApQVWbVot71uKbh6uAjHBx9GYYWpQwDs7MnWOrvpMtxnxcIS4gPERggZAYHJzTLMWuxSjy6uehoIRSRAs7Ysc208GzJpzqj8LpgcJTY7glfXKr1ZA008BtLMDiF66Gp1EzD6wkcASACkdImSGUoZBQWpqbmYHTMtZCQacwQYslBJLlg3tv8qjaPzf0ZD'; // expire december 22, 2024
const pageId = '112504047262722'; // YMB page ID

const fetchPosts = async () => {
  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${pageId}/feed?access_token=${accessToken}`);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <ArticleCard
            key={index}
            title={post.message || "MAG ISIP NG TITLE"} //error kung wala
            caption={post.story || "Caption???"}
            pic={`https://graph.facebook.com/${post.id}/picture?access_token=${accessToken}`}
            date={new Date(post.created_time).toLocaleDateString()}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Blog;
