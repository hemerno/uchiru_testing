import { useEffect, useState } from 'react';

/* Components */
import Grid from '../components/Grid/Grid';
import CatBox from '../components/CatBox/CatBox';
/* Types */
import { CatType } from '../App';
import ErrorPage from './ErrorPage';

type PropTypes = {};

const Favourites: React.FC<PropTypes> = () => {
  const catsFromLS: CatType[] =
    JSON.parse(localStorage.getItem('likedCats') || '{}') || [];
  const [likedCats, setLikedCats] = useState(catsFromLS);

  useEffect(() => {
    setLikedCats(JSON.parse(localStorage.getItem('likedCats') || '{}') || []);
  }, []);

  if (catsFromLS.length === 0)
    return <ErrorPage error="" message="No cats here..."></ErrorPage>;
  return (
    <Grid>
      {likedCats.map((cat) => (
        <CatBox item={cat} key={cat.id} />
      ))}
    </Grid>
  );
};

export default Favourites;
