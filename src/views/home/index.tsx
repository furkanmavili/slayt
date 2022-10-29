import { Link } from "react-router-dom";

const slides = [
  {
    id: "1",
    slug: "slide-1",
    title: "Slide 1",
    content: "Slide 1 content",
  },
  {
    id: "2",
    slug: "slide-2",
    title: "Slide 2",
    content: "Slide 2 content",
  },
  {
    id: "3",
    slug: "slide-3",
    title: "Slide 3",
    content: "Slide 3 content",
  },
];

function Home() {
  return (
    <div>
      <h3>Slides</h3>

      <ul>
        {slides.map((slide) => (
          <li key={slide.id}>
            <Link to={`/slides/${slide.slug}`}>{slide.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
