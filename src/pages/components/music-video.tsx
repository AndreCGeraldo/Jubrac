const MusicVideo = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 aspect-w-16 aspect-h-9">
      {/* Vídeo do YouTube */}
      <iframe
        src="https://www.youtube.com/embed/7vQ7KAiCg2M"
        title="Vídeo Musical"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default MusicVideo;
