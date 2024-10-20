import { useState, useEffect } from 'react';
import ArticleCard from './Card';

const accessToken = 'EAAWCp91tUGgBO9S4LZCXcZCM5ryMVzLnbZA02wSTytn0cig8OlEJLTZAKdiIH7s3D5oCK6ntq1fhMey28SKdlqmWwMUQadrjW0SzZC7eEsv7fWAcqB8WdA49WmjZBSOZCHYJdDDyjoafYbLUkZAdxIhRfsDropMvUoBPu0vjfMC0d5IaG7s4q7cKgJASr8pMqUUZD'; // expire december 18, 2024
const pageId = '112504047262722'; // YMB page ID
const ilan = 5; //Kung ilan posts

//STEP 1  Fetch posts
const fetchPosts = async () => {
  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${pageId}/feed?fields=message,created_time,full_picture&access_token=${accessToken}&limit=${ilan}`);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    console.log('Fetched Posts:', data.data); // console
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
            title={post.message || "No title"}
            caption={post.message}
            pic={post.full_picture}
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
