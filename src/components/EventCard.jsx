import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function EventCard({
  title,
  description,
  date,
  year,
  imgLink,
  mode,
  type,
  category,
  value,
}) {
  if (value === "all") {
    return (
      <div className=" w-96 my-6 flex dark:bg-black dark:border-2 dark:border-white dark:text-white  shadow-lg items-center flex-col rounded-2xl justify-center">
        <div className="p-4">
          <img
            src={imgLink}
            alt=""
            className="h-72 w-96  rounded-2xl shadow-cyan-500/50"
          />
        </div>
        <div className="bg-gr ay-100 h-44 dark:bg-black dark:text-white w-full p-4">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="h-8 ">{description}</p>
          <div className="text-md mt-4">
            <p className="truncate ">{type} </p>
            <p>{mode}</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-b-xl w-full px-4  pb-4">
          <p className="text-xl font-bold">
            {date}, {year}
          </p>
          <Button className="bg-[#4285F4]">LEARN MORE</Button>
        </div>
      </div>
    );
  } else {
    if (value === category) {
      return (
        <div className=" w-96 my-6 flex dark:bg-black dark:border-2 dark:border-white dark:text-white  shadow-lg items-center flex-col rounded-2xl justify-center">
          <div className="p-4">
            <img
              src={imgLink}
              alt=""
              className="h-72 w-96  rounded-2xl shadow-cyan-500/50"
            />
          </div>
          <div className="bg-gr ay-100 h-44 dark:bg-black dark:text-white w-full p-4">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="h-8 ">{description}</p>
            <div className="text-md mt-4">
              <p className="truncate ">{type} </p>
              <p>{mode}</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-b-xl w-full px-4  pb-4">
            <p className="text-xl font-bold">
              {date}, {year}
            </p>
            <Button className="bg-[#4285F4]">LEARN MORE</Button>
          </div>
        </div>
      );
    }
  }
}

export default EventCard;
