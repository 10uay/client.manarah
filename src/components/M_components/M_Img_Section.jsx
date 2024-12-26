
export default function M_Img_Section({info}) {
  return (
    <div className="container mx-auto">
      <div className="pb-24 mb-20 relative flex items-center justify-center">
        <div
          className="absolute !top-0 !left-0 w-full section-with-bg !bg-no-repeat rounded-[3rem] !h-[50vh] !bg-cover"
          style={{
            background: `url(${info?.big_img})`
          }}
        ></div>
        <div className="max-h-[575px] translate-y-20 rounded-[3rem]">
          <img
            src={info?.small_img}
            height="400"
            className="relative rounded-[3rem] object-conatin max-h-[550px]"
          />
        </div>
      </div>
    </div>
  );
}
