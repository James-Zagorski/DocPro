import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import RelevantResources from '../components/RelevantResources';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
      <div className="col-12 col-md-10 mt-3 mb-3 p-3">
          <RelevantResources />
        </div>


        
      </div>
    </main>
  );
};

export default Home;
