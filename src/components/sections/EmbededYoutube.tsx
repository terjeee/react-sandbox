export default function EmbededYoutube() {
  return (
    <div className="mx-auto overflow-hidden rounded-md">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/od_PmtmMDV0?"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
