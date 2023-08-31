import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import EventCard from "./EventCard";
import { useState } from "react";

function Events() {
  const [value, setValue] = useState("all");

  const data = [
    {
      title: "Code Shastra 8.0",
      description: "",
      category: "session",
      date: "Mar 26-27",
      year: 2022,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/template.png",
      mode: "",
      type: "",
    },
    {
      title: "Getting Started with Flutter",
      description: "Flutter Festival GDSC DJSCE",
      category: "festival",
      date: "Mar 1",
      year: 2022,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/ff_42Y1qY9%20%281%29_YgpHk0l.png",
      mode: "Virtual",
      type: "Speaker Session/Tech Talk",
    },
    {
      title: "Android Study Jams 2021",
      description: "Session 3",
      category: "festival",
      date: "Dec 11",
      year: 2021,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/event_banners/Kotlin-DSC-Promo-Event-Page-Thumbnail-R2-NAVY_Ek4Mp0g.png",
      mode: "Virtual",
      type: "Android Study Jams: Prior Programming Experience",
    },
    {
      title: "Android Study Jams 2021",
      description: "Session 2 - Build an app from scratch",
      category: "festival",
      date: "Dec 6",
      year: 2021,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/event_banners/Kotlin-DSC-Promo-Event-Page-Thumbnail-R2-NAVY_Ek4Mp0g.png",
      mode: "Virtual",
      type: "Android Study Jams: New to Programming",
    },
    {
      title: "Android Study Jams 2021",
      description: "Session 1 - Info Session",
      category: "festival",
      date: "Dec 1",
      year: 2021,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/event_banners/Kotlin-DSC-Promo-Event-Page-Thumbnail-R2-NAVY_Ek4Mp0g.png",
      mode: "Virtual",
      type: "Android Study Jams: New to Programming",
    },
    {
      title: "PixelHacks",
      description: "",
      category: "session",
      date: "Nov 29",
      year: 2021,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Cover_WMPMb81.png",
      mode: "Virtual",
      type: "Speaker Session/Tech Talk",
    },
    {
      title: "Open Source 101",
      description: "",
      category: "session",
      date: "Oct 23",
      year: 2021,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/event_xZnsuCd.png",
      mode: "Virtual",
      type: "Speaker Session/Tech Talk",
    },
    {
      title: "A Kickstart to Google Cloud",
      description: "",
      category: "festival",
      date: "Sep 27",
      year: 2021,
      imgLink:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Thumbnail_1W7xlEL.png",
      mode: "Virtual",
      type: "Speaker Session/Tech Talk",
    },
  ];
  console.log(value);

  return (
    <Tabs value={value} className="py-8 z-2 mt-12 px-20 z-1 ">
      <TabsHeader
        className="rounded-none border-b  border-blue-gray-50 bg-transparent dark:text-white p-0 z-1"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-[#4285F4] shadow-none rounded-none",
        }}
      >
        <Tab
          value="all"
          onClick={() => setValue("all")}
          className={
            value === "all"
              ? "text-gray-900 text-xl dark:text-white"
              : "text-xl dark:text-gray-600"
          }
        >
          All
        </Tab>
        <Tab
          value="session"
          onClick={() => setValue("session")}
          className={
            value === "session"
              ? "text-gray-900 text-xl dark:text-white"
              : "text-xl dark:text-gray-600"
          }
        >
          Sessions
        </Tab>
        <Tab
          value="festival"
          onClick={() => setValue("festival")}
          className={
            value === "festival"
              ? "text-gray-900 text-xl dark:text-white"
              : "text-xl dark:text-gray-600"
          }
        >
          Festivals
        </Tab>
      </TabsHeader>{" "}
      <TabsBody>
        <div className="grid grid-cols-3 gap-y-6 mt-8 justify-items-center">
          {data.map((details) => (
            <EventCard
              title={details.title}
              description={details.description}
              date={details.date}
              year={details.year}
              imgLink={details.imgLink}
              mode={details.mode}
              category={details.category}
              value={value}
              type={details.type}
            />
          ))}
        </div>
      </TabsBody>
    </Tabs>
  );
}

export default Events;
