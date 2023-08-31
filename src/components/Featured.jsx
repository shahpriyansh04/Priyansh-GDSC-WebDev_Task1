import { Carousel, Typography } from "@material-tailwind/react";
function Featured() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Typography variant="h2" className="py-4 dark:text-white">
        Featured Events
      </Typography>
      <Carousel
        autoplay
        loop
        className="w-[1000px] h-[550px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/ff_42Y1qY9%20%281%29_YgpHk0l.png"
          alt="Flutter Festival"
          className="w-full h-full object-fit"
        />
        <img
          src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/template.png"
          alt="Flutter Festival"
          className="w-full h-full object-fit"
        />
        <img
          src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/CODE%20THE%20FUTURE%20%28Banner%20%28Landscape%29%29%20%2811%20%C3%97%2017in%29.png"
          alt="Flutter Festival"
          className="w-full h-full object-fit"
        />
      </Carousel>
    </div>
  );
}
export default Featured;
