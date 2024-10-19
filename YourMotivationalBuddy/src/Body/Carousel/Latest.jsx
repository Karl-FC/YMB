import { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';

const accessToken = 'EAAWCp91tUGgBOZBI5I9iikZCwJh1HWZChZCN7xNR7QRthaJNl0Iw84s0pIgeZCAiZAS6uucL0aSeEiYWFZBsVGIeEbjixhxC7Kv5UqrO8lUlQ6ItvOuMsZA0F7o9aQR8rCa2P7NLYBO6lFvxjIhvnoCfhPjjy8gR4n8lZCYAwu1OAOPVguevadygbrcfz9VFqw0cZD'; // expire december 18, 2024
const pageId = '112504047262722'; // YMB page ID
var ilan = 6; //No of Thumbnails

const fetchPosts = async () => {
  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${pageId}/feed?access_token=${accessToken}&limit=${ilan}`);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data.data;
  } catch (error) {
    console.error('Error fetch postssss:', error);
    return [];
  }
};

function Latest() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => {
          const imageUrl = post.attachments && post.attachments.data[0].media
            ? post.attachments.data[0].media.image.src
            : './src/assets/favicon-32x32.png'; //logo lang muna kung walang pic

          return (
            <Thumbnail
              key={index}
              caption={post.message || "No caption"}
              pic={imageUrl}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Latest;
