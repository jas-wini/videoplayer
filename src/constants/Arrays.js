import { IoMdTrendingDown } from "react-icons/io";
import { IoMusicalNotes } from "react-icons/io5";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineSportsScore } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
export const sidebarcontent = [
  {
    title: "Trending",
    logo: <IoMdTrendingDown size={20} />,
  },
  {
    title: "Music",
    logo: <IoMusicalNotes size={20} />,
    categoryId: 10,
  },
  {
    title: "Gaming",
    logo: <GrGamepad size={20} />,
    categoryId: 20,
  },
  {
    title: "Sports",
    logo: <MdOutlineSportsScore size={20} />,
    categoryId: 17,
  },
  {
    title: "News",
    logo: <GiNewspaper size={20} />,
    categoryId: 25,
  },
  {
    title: "Entertainment",
    logo: <MdCastForEducation size={20} />,
    categoryId: 24,
  },
  {
    title: "Technology",
    logo: <GrTechnology size={20} />,
    categoryId: 28,
  },
];
