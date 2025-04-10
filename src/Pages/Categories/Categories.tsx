import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Icons (you can replace these with actual images or your preferred icon library)
import {
  GiBookshelf,
  GiSpellBook,
  GiTeacher,
  GiBrain,
  GiFamilyHouse,
  GiHealthPotion,
  GiEarthAmerica,
  GiBriefcase,
  GiMagnifyingGlass,
  GiHistogram,
  GiBabyFace,
  GiThreeFriends
} from "react-icons/gi";


interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface CategoryCardProps {
  color: string;
  bgColor: string;
}

interface IconWrapperProps {
  color: string;
  bgColor: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Fiction",
    description: "Explore imaginative stories and novels",
    icon: <GiBookshelf size={40} />,
    color: "#4f46e5",
    bgColor: "rgba(79, 70, 229, 0.1)",
  },
  {
    id: 2,
    name: "Non-Fiction",
    description: "Fact-based books on real events and topics",
    icon: <GiSpellBook size={40} />,
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 3,
    name: "Education",
    description: "Textbooks and learning materials",
    icon: <GiTeacher size={40} />,
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
  {
    id: 4,
    name: "Science & Tech",
    description: "Discover scientific breakthroughs",
    icon: <GiBrain size={40} />,
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    id: 5,
    name: "Home & Family",
    description: "Books for your home and relationships",
    icon: <GiFamilyHouse size={40} />,
    color: "#ec4899",
    bgColor: "rgba(236, 72, 153, 0.1)",
  },
  {
    id: 6,
    name: "Health & Wellness",
    description: "Improve your wellbeing",
    icon: <GiHealthPotion size={40} />,
    color: "#14b8a6",
    bgColor: "rgba(20, 184, 166, 0.1)",
  },
  {
    id: 7,
    name: "Travel",
    description: "Explore the world through books",
    icon: <GiEarthAmerica size={40} />,
    color: "#6366f1",
    bgColor: "rgba(99, 102, 241, 0.1)",
  },
  {
    id: 8,
    name: "Business",
    description: "Grow your professional skills",
    icon: <GiBriefcase size={40} />,
    color: "#f97316",
    bgColor: "rgba(249, 115, 22, 0.1)",
  },
  {
    id: 9,
    name: 'Mystery & Thriller',
    description: 'Unravel puzzles and suspenseful stories',
    icon: <GiMagnifyingGlass size={40} />,  // from react-icons/gi
    color: '#6b7280',
    bgColor: 'rgba(107, 114, 128, 0.1)'
  },
  {
    id: 10,
    name: 'Biography',
    description: 'Life stories of remarkable individuals',
    icon: <GiHistogram size={40} />,  // from react-icons/gi
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)'
  },
  {
    id: 11,
    name: 'Children',
    description: 'Books for young readers',
    icon: <GiBabyFace size={40} />,  // from react-icons/gi
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.1)'
  },
  {
    id: 12,
    name: 'Others',
    description: 'All other book categories',
    icon: <GiThreeFriends size={40} />,  // from react-icons/gi
    color: '#64748b',
    bgColor: 'rgba(100, 116, 139, 0.1)'
  }
];

const CategoriesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoriesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1e293b;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    border-radius: 2px;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const CategoryCard = styled(motion.div)<CategoryCardProps>`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.bgColor};
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const IconWrapper = styled.div<IconWrapperProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  transition: all 0.3s ease;
`;

const CategoryName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
  transition: all 0.3s ease;
`;

const CategoryDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

const Categories: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="pt-16">
      <CategoriesContainer>
        <CategoriesTitle>Browse Categories</CategoriesTitle>
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              color={category.color}
              bgColor={category.bgColor}
            >
              <IconWrapper color={category.color} bgColor={category.bgColor}>
                {category.icon}
              </IconWrapper>
              <CategoryName>{category.name}</CategoryName>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </CategoriesContainer>
    </div>
  );
};

export default Categories;
