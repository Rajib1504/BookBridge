import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Comma from "../assets/comma.png";

const TestimonialContainer = styled.div`
  max-width: 600px;
  width: 90%;
  min-height: 230px;
  margin: 2rem auto;
  font-family: "Georgia", serif;
  padding: 0 1rem;

  .carousel-root {
    min-height: 230px;
    display: flex;
    flex-direction: column;
  }

  .carousel.carousel-slider {
    margin: 0;
    padding: 0;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: #aaa;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .dot.selected {
    background: #333;
  }

  @media (max-width: 768px) {
    min-height: 200px;
    .carousel-root {
      min-height: 200px;
    }
  }

  @media (max-width: 480px) {
    min-height: 180px;
    .carousel-root {
      min-height: 180px;
    }
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-style: italic;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const AuthorName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const AuthorTitle = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
`;

const Divider = styled.div`
  height: 15px;
  width: 1px;
  background-color: #999;
  margin: 0 0.8rem;
  transform: rotate(15deg);

  @media (max-width: 480px) {
    margin: 0 0.5rem;
  }
`;

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "This book completely transformed my perspective on modern literature. The author's insights are both profound and accessible.",
      author: "Savanna Walker",
      title: "Resource Magazine",
    },
    {
      id: 2,
      text: "A must-read for any serious book lover. The depth of analysis is unmatched in today's literary review landscape.",
      author: "Michael Chen",
      title: "Literary Times",
    },
    {
      id: 3,
      text: "Our subscribers consistently rate Auteur as their most valuable resource for discovering meaningful literature.",
      author: "Elena Rodriguez",
      title: "Bookstore Monthly",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 px-4 md:px-10">
      <div className="mb-4 md:mb-6">
        <img src={Comma} alt="Quote icon" className="w-8 md:w-10" />
      </div>

      <TestimonialContainer>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <li
                className={`dot ${isSelected ? "selected" : ""}`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialContent>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <Divider />
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </TestimonialContent>
            </div>
          ))}
        </Carousel>
      </TestimonialContainer>
    </div>
  );
};

export default Testimonial;
