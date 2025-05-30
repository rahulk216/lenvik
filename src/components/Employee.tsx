import CountUp from "react-countup";
import img1 from "../assets/hero-images/bg1.jpg";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";

const Employee = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // 30% visibility before triggering
  });
  return (
    <div className="my-10 relative">
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue1/90 z-10"></div>
      <div className="relative z-20 p-10 text-white">
        <SectionHeader text="WHO ARE WE?" color="white" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nisi
          officia aliquid consequuntur repellendus laudantium maiores sapiente
          aut cupiditate eos eaque similique aspernatur nihil, debitis facilis
          voluptatem eius quaerat, porro, aliquam magni voluptas fuga dolorum.
          Enim facilis quis illo, asperiores dignissimos, nam incidunt qui
          aperiam adipisci sequi pariatur sed nemo. Id, velit. Cupiditate iusto
          adipisci quo minima placeat vitae enim tenetur quos. Distinctio
          recusandae,
        </p>
        <div className="mt-10 flex gap-10" ref={ref}>
          <div>
            <h3 className="text-2xl font-semibold">EMPLOYEES</h3>
            {inView && (
              <CountUp
                start={0}
                end={100}
                duration={3}
                className="text-5xl font-bold"
              />
            )}
            <span className="text-5xl font-bold ml-1">+</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">PROJECTS</h3>
            {inView && (
              <CountUp
                start={0}
                end={20}
                duration={3}
                className="text-5xl font-bold"
              />
            )}
            <span className="text-5xl font-bold ml-1">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
