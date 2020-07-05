import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const UsesPage = () => {
  return (
    <Layout>
      <SEO title="Uses" />
      <PageHeader title={"Uses"} />
      <div className="container container-content">
      <h2>Editor &amp; Command Line</h2>
      <ul>
        <li><em>PHPStorm.app</em> - Started using this a while ago when doing a lot of wordpress and I've stuck with it. Love the refactor features and a lot of the integrations with things like Docker. Have on occasion tried to switch to VSCode but I can't match the feature set so I'm in no rush to change.</li>
        <li><em>iTerm / PHPStorm integrated terminal</em> - Depending on context, but iTerm mainly for the comprehensive UI chagnes, I haven't really customised it very much but I do have some fun <a href={"../posts/autocomplete-branch-names-on-the-command-line"}>bash scripts for automation</a></li>
        <li>I use Firefox Developer Edition extensively in development, with Chrome Canary as my backup chrome enviorment</li>
        <li>Sketch</li>
        <li>JIRA</li>
        <li>Dropbox</li>

      </ul>
      <h2>Apps</h2>
      <h2>Setup</h2>
      </div>
    </Layout>
  );
};

export default UsesPage;
