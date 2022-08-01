import React from "react"
import _ from "lodash";
import {siteConfig} from "../../data/urls";

export const Debug = ({ data, details = false, detailsTitle = 'JSON' }: any) => {

  const wrapper = <pre>{ JSON.stringify(data, null, 2) }</pre>;

  if(!details) {
    return wrapper
  } else {
    return <details>
      <summary>{ detailsTitle }</summary>
      { wrapper }
    </details>
  }
}

export const getTagLink = (tag = '') => {
  if(tag) {
    return siteConfig.tagBaseUrl + _.kebabCase(tag);
  } else {
    return siteConfig.tagBaseUrl
  }
}
