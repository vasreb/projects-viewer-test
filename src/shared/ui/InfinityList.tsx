import React, { useEffect, useRef } from "react";

interface InfinityListProps {
  onBottom: () => void;
  children: React.ReactNode;
}

const InfinityList: React.FC<InfinityListProps> = ({ onBottom, children }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          onBottom();
        }
      }
    };

    const currentListRef = listRef.current;
    if (currentListRef) {
      currentListRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [onBottom]);

  return (
    <div ref={listRef} style={{ overflowY: "auto" }}>
      {children}
    </div>
  );
};

export default InfinityList;
