import React, { useRef } from "react";

const VideoSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    //console.log("onClick");
    handleSearch();
  };
  const onkeyPress = (event) => {
    //console.log("onKeyPress");
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="title">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요"
        onKeyPress={onkeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
};

export default VideoSearch;
