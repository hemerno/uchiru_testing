import { useEffect, useState } from 'react';
import { CatWrapper, CatLikeButton } from './CatBox.style';
import { CatType } from '../../App';

type PropTypes = {
  item: CatType;
};

const CatBox: React.FC<PropTypes> = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  //
  const localCats: CatType[] | [] =
    JSON.parse(localStorage.getItem('likedCats') || '{}') || [];

  // IDs of localy stored cats
  const ids = localCats.map((x: CatType) => x.id);

  /*
    Check if cat is already in liked
  */
  const checkLikeInLS = () => {
    if (ids.indexOf(item.id) !== -1) {
      setIsLiked(true);
    }
  };

  /*
    Create and modify state of local storage on click event
  */
  const catLikeHandler = (): void => {
    /*
    indexOf() is faster than includes()
    https://javascript.plainenglish.io/algorithms-101-includes-vs-indexof-in-javascript-7f1b4af04127
    */
    if (ids.indexOf(item.id) === -1) {
      localStorage.setItem('likedCats', JSON.stringify([...localCats, item]));
      setIsLiked(true);
    } else {
      localStorage.setItem(
        'likedCats',
        JSON.stringify([...localCats.filter((x: CatType) => x.id !== item.id)])
      );
      setIsLiked(false);
    }
  };

  useEffect(() => {
    checkLikeInLS();
  });

  return (
    <CatWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.url} alt="" />
      {isHovered && (
        <CatLikeButton onClick={catLikeHandler}>
          {isLiked ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Heart</title>
              <path
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                fill="#f24e1e"
                stroke="#f24e1e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Heart</title>
              <path
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                fill="transparent"
                stroke="#f24e1e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          )}
        </CatLikeButton>
      )}
    </CatWrapper>
  );
};

export default CatBox;
