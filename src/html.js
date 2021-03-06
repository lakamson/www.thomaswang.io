import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html className="no-js" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript
          id="gatsby-noscript"
          style={{
            position: "absolute",
            right: "16px",
            top: "16px",
            fontWeight: "500",
            fontFamily: `system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
          }}
        >
          JavaScript is 🚫. This site 🏃‍♂️💨 better with it on.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          style={{
            opacity: 0,
            transition: "0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
