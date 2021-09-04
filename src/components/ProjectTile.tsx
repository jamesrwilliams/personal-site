import React from 'react';
import styled from 'styled-components';
import {OutboundLink} from "gatsby-plugin-google-analytics";

interface ProjectInterface {
  title: string;
  description: string;
  language: string;
  url: string;
}

const ProjectTileElm = styled.div`
  border: 1px solid #ccc4;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  width: 28%;
  flex-direction: column;
  background: #eee5;
  margin-bottom: 1rem;

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

const ProjectLink = styled(OutboundLink)`
  text-decoration: none;
  color: #444;

`;

const ProjectDescription = styled.p`
  flex-grow: 1;
`

const ProjectTile = ({
  title, description, language, url,
}: ProjectInterface) => (
  <ProjectTileElm>
    <OutboundLink href={url}><h3 style={{ margin: 0 }}>{ title }</h3></OutboundLink>
    <ProjectDescription>{ description }</ProjectDescription>
    <div className="meta" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Tag>{ language }</Tag>
      <ProjectLink href={url}>Read more...</ProjectLink>
    </div>
  </ProjectTileElm>
);

export default ProjectTile;
