import { useQuery } from 'react-query';
/* Components */
import Grid from '../components/Grid/Grid';
import CatBox from '../components/CatBox/CatBox';
import ProgressIndicator from '../components/ProgressIndicator/ProgressIndicator';
/* Types */
import { CatType } from '../App';

type PropTypes = {};

const Home: React.FC<PropTypes> = () => {
  const getCats = async () => {
    return await (
      await fetch(`https://api.thecatapi.com/v1/images/search?limit=20`, {
        headers: {
          'x-api-key': process.env.REACT_APP_APIKEY || '',
        },
      })
    ).json();
  };

  const { data, isFetching, error } = useQuery('cats', getCats);

  if (isFetching) return <ProgressIndicator />;

  if (error)
    return <div>There was an error during load. Try again later. </div>;
  return (
    <Grid>
      {data?.map((el: CatType) => (
        <CatBox item={el} key={el.id} />
      ))}
    </Grid>
  );
};

export default Home;
