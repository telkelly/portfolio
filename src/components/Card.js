import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const Card = ({ projects }) => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  return (
    <LayoutGroup>
      {projects.map((item, index) => {
        const isOpen = index === openCardIndex;

        return isOpen ? (
          <motion.div
            className="expanded-card"
            onClick={() => setOpenCardIndex(null)}
            layoutId={`expandable-card-${index}`}
            key={index}
          >
            <motion.h1 layoutId={`expandable-card-h-${index}`}>
              {item.title}
            </motion.h1>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.img src={item.imgSrc} alt={item.title} />
          </motion.div>
        ) : (
          <motion.div
            className="normal-card"
            onClick={() => setOpenCardIndex(index)}
            layoutId={`expandable-card-${index}`}
            key={index}
          >
            <motion.h2 layoutId={`expandable-card-h-${index}`}>
              {item.title}
            </motion.h2>
            <p>{item.subtitle}</p>
          </motion.div>
        );
      })}
    </LayoutGroup>
  );
};

export default Card;
