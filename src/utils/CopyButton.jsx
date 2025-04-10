import { useState } from 'react';
import { FaRegCopy , FaCopy } from "react-icons/fa";

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="copy_Btn bg-white h-10 w-20 text-sm flex justify-center items-center font-semibold text-center rounded-4xl cursor-pointer text-black"
    >
      {isCopied ? <><FaCopy/>Copied</> : <><FaRegCopy/>Copy</>}
    </button>
  );
};

export default CopyButton;
