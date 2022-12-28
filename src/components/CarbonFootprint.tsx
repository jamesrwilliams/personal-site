import React from "react"
import {graphql, StaticQuery} from "gatsby";

export const CarbonFootprint = () => {
  return <StaticQuery
    query={graphql`
        query CarbonFootprintQuery {
            carbonFootprint {
              green
              cleanerThan
              timestamp
              statistics {
                adjustedBytes
                co2 {
                  grid {
                    grams
                    litres
                  }
                  renewable {
                    grams
                    litres
                  }
                }
                energy
              }
            }
        }
      `}
    render={data => {

      const { carbonFootprint } = data;

      const carbonFootprintInGrams = carbonFootprint.statistics.co2.grid.grams;
      const cleanerThan = carbonFootprint.cleanerThan;

      return (
        <p>
          This website is estimated to produce <strong>{ carbonFootprintInGrams.toFixed(2) }g
          of CO2</strong>, <em>everytime</em> someone visits. Which is estimated to be cleaner
          than { cleanerThan * 100 }% of the internet, find out more with
          the <a
            href="https://www.websitecarbon.com/website/jamesrwilliams-ca/"
            target={'_blank'}
            rel={"noopener"}
          >Website Carbon Calculator</a>.
        </p>
      )
    }}
  />
}
