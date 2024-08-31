import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked)
    return <GoHeartFill size={17} color="ff8b81" onClick={toggleLike} />;
  return <GoHeart size={17} color="ff8b81" onClick={toggleLike} />;
};

export default Like;
