import styled from "styled-components";
import { motion } from "framer-motion";
import { DateToNow } from "../templates/Dates";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function PodcastCard({
  podcastName,
  episodeName,
  url,
  date,
  id,
  podcastCover,
}) {
  return (
    <a key={id} href={url}>
      <StyledPodcastCard initial="initial" whileHover="hover">
        {podcastCover && (
          <ImageWrapper initial="initial" whileHover="hover">
            <ExternalLinkContainer>
              <ArrowTopRightOnSquareIcon width="48" height="48" />
            </ExternalLinkContainer>
            <Image
              src={podcastCover}
              alt={episodeName}
              width={120}
              height={120}
            />
          </ImageWrapper>
        )}
        <InnerText>
          <h3>{episodeName}</h3>
          <MetadataContainer>
            <span>Podcast</span>
            <svg width="4px" height="6px">
              <circle r="2" cx="2" cy="4" fill="var(--color-gray-400)" />
            </svg>
            <span>{podcastName}</span>
            <svg width="4px" height="6px">
              <circle r="2" cx="2" cy="4" fill="var(--color-gray-400)" />
            </svg>
            <DateToNow postDate={date} />
          </MetadataContainer>
        </InnerText>
      </StyledPodcastCard>
    </a>
  );
}

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    transition: all 0.3s ease-in-out;
    margin-bottom: 0.5rem;
  }
`;

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  letter-spacing: 0.015rem;
  font-weight: 400;
  text-transform: capitalize;
  svg {
    margin: 0 0.5rem !important;
  }
`;

const StyledPodcastCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  grid-gap: 1.25rem;
  padding: 0.25rem;
  margin-bottom: 2rem !important;
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--color-cream);
  cursor: pointer;
  img {
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    h3 {
      color: var(--color-crimson);
    }
    img {
      opacity: 0.05;
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  display: grid;
  position: relative;
  top: 0;
  place-items: start;
  min-width: 120px;
  max-height: 120px;
  border-radius: 4px;
  box-shadow: var(--box-shadow-sm);
  margin-bottom: 0 !important;
  transition: all 0.3s ease-in-out;
`;

const ExternalLinkContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  color: var(--color-gray-800);
`;