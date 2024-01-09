// ChapterPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import chapterContents from '../chapterContent';
import axios from 'axios';
import YouTube from 'react-youtube';

const ChapterPage = () => {
  const { chapterId } = useParams();
  const chapterData = chapterContents[chapterId] || {};
  const [videos, setVideos] = useState(chapterData.videos || []);

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = chapterData.youtubeChannelId;
      if (channelId) {
        const apiKey = import.meta.env.VITE_YoutubeAPIKey; 
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=viewCount&key=${apiKey}`;

        try {
          const response = await axios.get(url);
          setVideos(response.data.items.map(item => item.id.videoId));
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      }
    };

    fetchVideos();
  }, [chapterId, chapterData.youtubeChannelId]); 

  // VideoPlayer component
  const VideoPlayer = ({ videoId }) => {
    return <YouTube videoId={videoId} opts={{ playerVars: { 'autoplay': 0, 'controls': 1 } }} />;
  };

  return (
    <div className="chapter-page">
      <Sidebar subsections={chapterData.subsections.map(title => ({ title, path: `#${title}` }))} />
      <div className="content">
        {videos.map((videoId, index) => (
          <VideoPlayer key={index} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};

export default ChapterPage;