import { useState, useEffect } from "react";
import Layout from "../../componentes/Layout"
import VideoVisor from "../../componentes/VideoVisor"
import Carousel from "../../componentes/Carousel";
import Baner from "../../componentes/Baner";

const Home = () => {

    const defaultVideoUrl = "https://www.youtube-nocookie.com/embed/videoseries?si=mYpzQKWNUh341Uel&amp;controls=0&amp;list=PLmVJ0CeRYtBxgD2lU-WayzydmZM_K7JgK";

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const initialVideoUrl = localStorage.getItem("videoUrl");
        if (initialVideoUrl) {
            setVideoUrl(initialVideoUrl);
        } else {
            setVideoUrl(defaultVideoUrl);
        }
    }, []);

    return (
        <Layout>
            <div className="max-h-full grid grid-cols-3" style={{ height: '100vh' }}>
                <div className="col-span-3 lg:col-span-2 flex items-center justify-center flex-wrap">
                    <VideoVisor videoUrl={videoUrl} />
                </div>
                <div className="col-span-3 lg:col-span-1 carousel flex justify-center items-center">
                    <Carousel />
                </div>
            </div>
            <Baner />
        </Layout>
    )
}

export default Home