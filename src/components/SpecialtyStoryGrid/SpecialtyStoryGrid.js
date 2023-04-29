import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStory>
              <MiniStory key={data.id} {...data} />
            </SportsStory>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    
    > section:first-of-type {
      padding-right: 16px;
      border-right: 1px solid var(--color-gray-300);
      margin-right: 16px;
    }
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));      
`;

const SportsSection = styled.section`
  display: grid;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));  

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    overflow: auto;
  }
`;

const SportsStory = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`

export default SpecialtyStoryGrid;
