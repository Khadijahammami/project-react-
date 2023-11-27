import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementArticleCard from './ElementsArticleCard';

function ListArticlesCard() {
  const [listcard, setListCard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cataog')
      .then((res) => {
        const data = res.data;
        setListCard(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   return (
    <div className="container">
          <ElementArticleCard listcard={listcard} />
    </div>
  );
}

export default ListArticlesCard;
