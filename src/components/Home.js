import YouTubeEmbed from "./YouTubeEmbed";

const Home = () => {
  return (
    <div className="h-full mt-10 md:-mt-10 xl:-mt-28 3xl:-mt-32 w-full text-center flex flex-col justify-between">
      <div className="pt-4 text-[40px] md:text-[48px] px-3 uppercase leading-tight">
        Welcome to<span className="text-metacrateRed"> MetaCrate.</span>
      </div>
      <div className="hidden xl:flex justify-center my-4 mx-auto border-8 border-black w-fit z-40" >
        <YouTubeEmbed embedId="A91ymdbTZlA" width={600} height={320} />
      </div>
      <div className="hidden md:flex xl:hidden justify-center my-4 mx-auto border-8 border-black w-fit z-40">
        <YouTubeEmbed embedId="A91ymdbTZlA" width={400} height={220} />
      </div>
      <div className="flex md:hidden justify-center my-2 mx-auto border-8 border-black w-fit z-40" >
        <YouTubeEmbed embedId="A91ymdbTZlA" width={300} height={180} />
      </div>
      <div className="text-[16px] uppercase px-8 pb-10 -mt-6 sm:mt-0 z-40">
        COLLECT, CONSUME, AND TRADE EXCLUSIVE NFT RECORDS FROM YOUR FAVORITE
        ARTISTS
      </div>
    </div>
  );
};
export default Home;
