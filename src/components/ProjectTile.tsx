import React from 'react';
import styled from 'styled-components';
import {ExternalLink} from "./utilities/ExternalLink";
import {accentPrimary, mediaQuery} from "../theme/variables";

interface ProjectInterface {
  title: string;
  description: string;
  language: string;
  url: string;
}

const ProjectTileElm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1rem;
  border: 1px solid #ccc5;
  color: #000000d9;
  font-size: 14px;
  background: #fff;

  @media screen and ${mediaQuery.minMd} {
    width: 32%;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Tag = styled.span`
  display: inline-block;
  height: auto;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;

const ProjectLink = styled(ExternalLink)`
  text-decoration: none;
  color: #444;
  transition: all .3s ease;

  &:hover {
    color: ${accentPrimary};
  }

`;

const ProjectDescription = styled.p`
  flex-grow: 1;
  padding: 12px 12px 0;
  margin: 0;
`;

const ProjectTitle = styled(ExternalLink)`
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
  font-weight: 500;
  color: #000000d9;
  font-size: 14px;
  display: block;
  padding: 8px 12px;
`;

const ProjectTileMeta = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
`;

const ProjectTile = ({
  title, description, language, url,
}: ProjectInterface) => (
  <ProjectTileElm>
    <ProjectTitle href={url}>{ title }</ProjectTitle>
    <ProjectDescription>{ description }</ProjectDescription>
    <ProjectTileMeta>
      <Tag>{ language }</Tag>
      <ProjectLink href={url}>Read more...</ProjectLink>
    </ProjectTileMeta>
  </ProjectTileElm>
);

export default ProjectTile;
