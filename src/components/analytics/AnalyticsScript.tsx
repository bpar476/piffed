import React, { FunctionComponent } from 'react'

export type AnalyticsScriptProps = {
  trackingId: string
}

// Add this component to your next.js _document.jsx with your google tag manager tracking ID
export const AnalyticsScript: FunctionComponent<AnalyticsScriptProps> = ({ trackingId }) => (
  <>
    {/*Global site tag (gtag.js) - Google Analytics*/}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_path: window.location.pathname,
      });
        `,
      }}
    />
  </>
)
