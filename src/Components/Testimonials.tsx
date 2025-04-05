import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Comma from "../assets/comma.png"

const TestimonialContainer = styled.div`
  max-width: 600px;
  min-height: 230px;
  margin: 2rem auto;
  font-family: "Georgia", serif;
  padding: 0 1rem;

  .carousel carousel-slider{
  min-height: 100%;
  margin: 0px;
  padding: 0px;
  }
  .carousel-root{
  min-height: 230px;
  display: flex;
  }
  
  /* Custom styles for carousel dots */

`;
// const PublicationInfo = styled.p`
//   font-size: 0.9rem;
//   color: #333;
//   line-height: 1.6;
//   text-align: center;
//   margin-bottom: 2.5rem;
//   font-weight: 300;
// `;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-style: italic;
  max-width: 500px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
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
    <div className="bg-[#F4F4EC] flex flex-col justify-center items-center py-10">
      <div>
        <img src={Comma} alt="" />
      </div>
      <TestimonialContainer>
        {/* <PublicationInfo>
      Auteur is a monthly book review publication distributed to 400,000 avid
      readers through subscribing bookstores & public libraries.
    </PublicationInfo> */}

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
