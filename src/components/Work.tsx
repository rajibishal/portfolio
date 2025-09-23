import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Inert Farming",
    role: "AI & ML",
    tools: "HTML, CSS, JavaScript, Python, TensorFlow, Keras, OpenCV",
    image: "/images/ai-farming.png",
    link: "https://github.com/rounakkumar30/Inert_Farming",
  },
  {
    title: "Fashion Recommendation System",
    role: "AI & ML",
    tools: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn",
    image: "/images/frs.png",
    link: "https://github.com/rajibishal/fashion-recommendation-system",
  },
  {
    title: "Face Recognition Door Unlock System",
    role: "Iot & AI",
    tools: "Arduino, Python, OpenCV,",
    image: "/images/unlock-system.jpg",
    link: "",
  },
  // Remaining projects will be ignored due to slice(0, 3)
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding || "0") / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.slice(0, 3).map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.role}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WorkImage image={project.image} alt={project.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
