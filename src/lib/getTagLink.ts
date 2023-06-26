import {siteConfig} from "../data/urls";
import {toKebabCase} from "./toKebabCase";

export const getTagLink = (tag = '') => {
  if(tag) {
    return siteConfig.tagBaseUrl + toKebabCase(tag);
  } else {
    return siteConfig.tagBaseUrl
  }
}
