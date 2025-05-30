import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import Tab from "./Tab";
import useSanityClientFetch from "../sanity/useSanityFetch";

const query = `*[_type == "service"]{
  _id,
  id,
  title,
  isSelected,
  heading,
  subText,
  "imgUrl": img.asset->url
}`;

// [
//     {
//       id: 1,
//       title: "Civil Construction",
//       isSelected: true,
//       heading: "Comprehensive Civil Construction and Engineering",
//       subText:
//         "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium itaque consequuntur iste facilis impedit obcaecati. Beatae aspernatur, accusantium assumenda ad illum modi magnam blanditiis deserunt delectus? Hic, esse ab.",
//       img: img1,
//     },
//     {
//       id: 2,
//       title: "Structural Fabrication",
//       isSelected: false,
//       heading: "Innovative Structural Fabrication Solutions Delivered",
//       subText:
//         "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium itaque consequuntur iste facilis impedit obcaecati. Beatae aspernatur, accusantium assumenda ad illum modi magnam blanditiis deserunt delectus? Hic, esse ab.",
//       img: img1,
//     },
//     {
//       id: 3,
//       title: "Peb Structure",
//       isSelected: false,
//       heading: "PEB Structure Design and Installation",
//       subText:
//         "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium itaque consequuntur iste facilis impedit obcaecati. Beatae aspernatur, accusantium assumenda ad illum modi magnam blanditiis deserunt delectus? Hic, esse ab.",
//       img: img1,
//     },
//     {
//       id: 4,
//       title: "Roofing Work",
//       isSelected: false,
//       heading: "High-Quality Roofing Work and Solutions",
//       subText:
//         "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium itaque consequuntur iste facilis impedit obcaecati. Beatae aspernatur, accusantium assumenda ad illum modi magnam blanditiis deserunt delectus? Hic, esse ab.",
//       img: img1,
//     },
//     {
//       id: 5,
//       title: "Mechanical Piping",
//       isSelected: false,
//       heading: "Industrial Mechanical Piping System Solutions",
//       subText:
//         "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium itaque consequuntur iste facilis impedit obcaecati. Beatae aspernatur, accusantium assumenda ad illum modi magnam blanditiis deserunt delectus? Hic, esse ab.",
//       img: img1,
//     },
//   ]

const AboutUs = () => {
  const { data: services, loading, error } = useSanityClientFetch(query);
  console.log({ services });
  const scrollRef = useRef(null);

  const [tabs, setTabs] = useState([]);
  const handleTabSelection = (id: number) => {
    const updatedTabs = tabs.map((tab) => {
      return {
        ...tab,
        isSelected: tab.id === id,
      };
    });
    setTabs(updatedTabs);
  };

  return (
    <div className="m-10 ">
      <SectionHeader text="WHAT WE DO?" color="blue1" />
      <h2 className="font-semibold text-3xl">
        We're shaping the future of construction with our vision.
      </h2>

      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide mt-5">
        <div className="flex space-x-10 py-2 scroll-smooth" ref={scrollRef}>
          {" "}
          {tabs.map((item) => (
            <Tab item={item} onClick={handleTabSelection} />
          ))}
        </div>
      </div>

      <div className="mt-5">
        {tabs
          .filter((tab) => tab.isSelected)
          .map((item) => (
            <div>
              <h2 className="mb-5 font-medium text-xl text-blue1">
                {item.heading}
              </h2>
              <img
                src={item.img}
                alt="about us"
                loading="lazy"
                decoding="async"
              />
              <p className="mt-5">{item.subText}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AboutUs;
