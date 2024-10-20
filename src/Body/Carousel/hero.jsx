import { useState,useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Thumbnail from "./Thumbnail";

const accessToken = 'EAAWCp91tUGgBO9S4LZCXcZCM5ryMVzLnbZA02wSTytn0cig8OlEJLTZAKdiIH7s3D5oCK6ntq1fhMey28SKdlqmWwMUQadrjW0SzZC7eEsv7fWAcqB8WdA49WmjZBSOZCHYJdDDyjoafYbLUkZAdxIhRfsDropMvUoBPu0vjfMC0d5IaG7s4q7cKgJASr8pMqUUZD'; // expire december 18, 2024
const pageId = '112504047262722'; // YMB page ID
const ilan = 5; //Kung ilan posts

//Basically yun const sa Blog.jsx
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



function Hero(){

  const [sliderRef, slider] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
              }
            function nextTimeout() {
                  clearTimeout(timeout)
                  if (mouseOver) return
                  timeout = setTimeout(() => {
                    slider.next()
                  }, 2000) /*2000 miliseconds o 2 seconds */
                }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      );

      const [posts, setPosts] = useState([]);


    useEffect(() => {
      fetchPosts().then(data => {
        setPosts(data);
  
        // Force window resize
        const originalWidth = document.body.style.width;
        document.body.style.width = "50%";
        setTimeout(() => {
          document.body.style.width = originalWidth;
          window.dispatchEvent(new Event('resize'));
        }, 10); // 10 milliseconds should be enough to trigger the resize event
  
      }).catch(console.error);
    }, [slider]);
  
     return (
        <div ref={sliderRef} className="keen-slider">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div className="keen-slider__slide" key={index}>
                <Thumbnail
                  title={post.message || "No title"}
                  caption={post.message}
                  pic={post.full_picture}
                  date={new Date(post.created_time).toLocaleDateString()}
                />
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      );
    }
    
    export default Hero;