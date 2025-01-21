"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingAnimation = () => {
  const [typingAffect] = useTypewriter({
    words: ['Software Engineer', 'Software Developer', 'Data Scientist', 'Data Engineer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="container text-3xl">
      <p>An aspiring...</p>
      <span 
        className="inline-block text-accent font-semibold" 
        style={{ display: 'inline-block', minWidth: '220px' }} // Adjust minWidth based on the longest word
      >
        {typingAffect}
        <Cursor />
      </span>
    </div>
  );
};

export default TypingAnimation;
