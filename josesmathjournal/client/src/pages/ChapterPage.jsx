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
    const [notes, setNotes] = useState("");


    useEffect(() => {
        const fetchVideos = async () => {
            const channelId = chapterData.youtubeChannelId;
            if (channelId) {
                const apiKey = import.meta.env.VITE_YoutubeAPIKey;
                const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=viewCount&key=${apiKey}`;

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

    // VideoPlayer component with Tailwind CSS for styling
    const VideoPlayer = ({ videoId }) => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0,
                controls: 1
            }
        };

        return (
            <div className="flex justify-center">
                <YouTube videoId={videoId} opts={opts} className="shadow-lg rounded-lg" />
            </div>
        );
    };

    return (
      <div className="chapter-page flex flex-col lg:flex-row mt-60 mb-20 ml-30">
          <Sidebar subsections={chapterData.subsections.map(title => ({ title, path: `#${title}` }))} />
          <div className="content mx-auto p-4 lg:flex-grow">
              {videos.map((videoId, index) => (
                  <div key={index}>
                      <VideoPlayer videoId={videoId} />
                  </div>
              ))}
          </div>
          <div className="notepad w-full lg:w-1/4 p-4 h-[calc(60vh-4rem)] overflow-y-auto">
              <textarea 
                  className="w-full h-full p-2 border rounded-md" 
                  placeholder="Take notes here..." 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
              />
          </div>
      </div>
  );
};

export default ChapterPage;
