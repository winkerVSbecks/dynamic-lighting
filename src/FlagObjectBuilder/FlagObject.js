import React from 'react';
import { Flex, Box, Icon, Hidden } from '../primitives';
import {
  Card,
  Headline,
  StandFirst,
  Meta,
  MetaLink,
  Pillar,
  Media,
  Blocky,
} from './components';

const story = {
  headline:
    'Manchester United agree £80m deal to buy Harry Maguire from Leicester',
  standFirst:
    'Manchester United have agreed an £80m deal to buy Harry Maguire from Leicester City, making him the world’s most expensive defender',
  meta: '2 Aug 2019',
  media:
    'https://i.guim.co.uk/img/media/974ef47a5a96b017510dca7371c48fd133d416c1/2_125_3522_2113/master/3522.jpg?width=470&quality=45&auto=format&fit=max&dpr=2&s=0b4979f9faaefbfbd015dd77d22d2d4b',
};

export const FlagObject = ({
  headline,
  pillar,
  standFirst,
  meta,
  media,
  contentHidden,
}) => (
  <Card width={10} backgroundColor="neutral.6">
    <Box mb={3} mt={1}>
      {headline && (
        <Headline>
          {pillar && <Pillar blocky={contentHidden}>Football</Pillar>}{' '}
          <Blocky color="neutral.0" blocky={contentHidden}>
            {story.headline}
          </Blocky>
        </Headline>
      )}
      <Box>
        {standFirst && (
          <StandFirst mb={2}>
            <Blocky color="neutral.1" blocky={contentHidden}>
              {story.standFirst}
            </Blocky>
          </StandFirst>
        )}
        {meta && (
          <Flex justifyContent="space-between">
            <Meta
              as="time"
              datetime="2019-08-02T18:27:00+0000"
              blocky={contentHidden}
            >
              <Icon
                width="11px"
                height="11px"
                mr="2px"
                color="neutral.2"
                viewBox="0 0 11 11"
                fill="currentcolor"
              >
                <path d="M5.4 0C2.4 0 0 2.4 0 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4S8.4 0 5.4 0zm3 6.8H4.7V1.7h.7L6 5.4l2.4.6v.8z" />
              </Icon>{' '}
              <Hidden>Published: </Hidden>2 Aug 2019
            </Meta>
            <MetaLink
              href="https://www.theguardian.com/football/2019/aug/03/jadon-sancho-stars-as-dortmund-earn-supercup-win-over-bayern-munich#comments"
              data-link-name="Comment count"
              aria-label="32 comments"
              blocky={contentHidden}
            >
              <Icon
                width="14px"
                height="14px"
                mt="1"
                mr="2px"
                viewBox="0 0 16 16"
                fill="currentcolor"
                color="neutral.2"
              >
                <path d="M13 0l1 1v7l-1 1h-6l-2 3h-1v-3h-2l-1-1v-7l1-1h11z" />
              </Icon>{' '}
              32
            </MetaLink>
          </Flex>
        )}
      </Box>
    </Box>
    {media && (
      <Media blocky={contentHidden} aspectRatio={5 / 3} image={story.media} />
    )}
  </Card>
);
