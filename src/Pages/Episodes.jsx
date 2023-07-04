import React from 'react';
import { useGetEpisodesQuery } from '../services/bobsburgersAPI';
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import NodataFound from "./NodataFound";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Episodes = () => {
  const {
    data: bobsburgers = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetEpisodesQuery();

  if (isLoading || isFetching) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  if (!bobsburgers || bobsburgers.length === 0) {
    return (
      <div>
        <NodataFound />
      </div>
    );
  }

  // Group episodes by season
  const groupedEpisodes = bobsburgers.reduce((acc, bobsburger) => {
    const season = bobsburger.season;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(bobsburger);
    return acc;
  }, {});

  return (
    <div>
      <Tabs>
        <TabList>
          {Object.keys(groupedEpisodes).map((season) => (
            <Tab key={season}>Season {season}</Tab>
          ))}
        </TabList>

        {Object.entries(groupedEpisodes).map(([season, episodes]) => (
          <TabPanel key={season}>
            <h2>Season {season}</h2>
            {episodes.map((episode) => (
              <div key={episode.id}>
                <h3>Episode: {episode.episode}</h3>
                <p>Air Date: {episode.airDate}</p>
                {/* Render other episode details */}
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default Episodes;
