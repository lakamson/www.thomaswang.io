import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { connect } from "react-redux"

import { rhythm } from "../utils/typography"

const YoutubeIcon = ({ logoColor }) => (
  <svg
    viewBox="0 0 16 16"
    height="20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{ fill: `${logoColor}` }}
      fill={logoColor}
      d="m8 2c-2.039062 0-3.84375.210938-4.941406.375-.898438.132813-1.613281.835938-1.777344 1.738281-.140625.789063-.28125 1.941407-.28125 3.386719 0 1.445313.140625 2.597656.28125 3.386719.164063.902344.878906 1.601562 1.777344 1.738281 1.101562.164063 2.914062.375 4.941406.375s3.835938-.210937 4.9375-.375h.003906c.898438-.132812 1.613282-.835937 1.777344-1.738281.140625-.792969.28125-1.945313.28125-3.386719 0-1.445312-.140625-2.597656-.285156-3.386719-.160156-.902343-.875-1.605468-1.773438-1.738281-1.097656-.164062-2.902343-.375-4.941406-.375zm0 1c1.96875 0 3.730469.203125 4.792969.363281.46875.070313.847656.4375.9375.925782.132812.738281.269531 1.832031.269531 3.210937s-.136719 2.472656-.265625 3.207031c-.089844.492188-.46875.859375-.941406.929688-1.070313.15625-2.835938.363281-4.792969.363281s-3.726562-.207031-4.792969-.363281c-.46875-.070313-.851562-.4375-.941406-.929688-.128906-.738281-.265625-1.828125-.265625-3.207031 0-1.382812.136719-2.472656.265625-3.210937.089844-.488282.46875-.855469.9375-.921875h.003906c1.0625-.160157 2.824219-.367188 4.792969-.367188zm-2 2v5l5-2.5z"
    />
  </svg>
)

const TwitterIcon = ({ logoColor }) => (
  <svg
    viewBox="0 -48 512 512"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{ fill: `${logoColor}` }}
      fill={logoColor}
      d="m512 49c-19.171875 8.496094-40.175781 13.539062-61 16 21.929688-13.128906 38.160156-33.675781 46-58-20.621094 12.234375-42.332031 21.363281-65.855469 26-20.328125-21.617188-47.640625-33-75.144531-33-27 0-52.796875 9.105469-73.480469 28.558594-21.34375 20.070312-33.476562 47.835937-33.519531 76.441406-.011719 7.960938 1.285156 15.984375 3.128906 23.925781-84.460937-4.234375-162.789062-44.300781-216.128906-109.925781-9.667969 16.644531-15.011719 35.027344-15 53 .023438 33.851562 16.847656 66.863281 47 87-16.71875-.496094-33.390625-3.855469-48-12v1.914062c.015625 50.003907 35.984375 91.183594 85 101.085938-8.660156 2.363281-19.890625 4.035156-28.910156 4.035156-.03125 0-.0625 0-.089844 0-7.050781-.011718-14.101562-.707031-21-2.035156 13.761719 42.792969 56.058594 74.15625 101 75-37.195312 29.234375-95 43-130.992188 43-8.359374-.015625-16.710937-.007812-25.007812-1 47.925781 30.753906 103.675781 47 160.613281 47h.398438v.082031c191.988281 0 298.988281-160.117187 298.988281-298.933593 0-4.546876-.691406-9.644532-1-14.148438 20.558594-14.871094 38.894531-32.90625 53-54zm-109.144531 159.296875c-11.78125 31.226563-28.710938 59.445313-50.316407 83.875-22.910156 25.902344-50.046874 46.238281-80.648437 60.4375-31.488281 14.609375-66.261719 22.460937-103.460937 23.378906l-7.488282.011719h-.328125c-2.164062 0-4.324219-.027344-6.480469-.082031 9.410157-5.195313 18.367188-11.011719 26.582032-17.46875 20.648437-19.179688 29.863281-43.476563 33.285156-70.367188 0 0-16.832031 2.046875-36 1.917969-14.851562-.101562-31.101562-1.320312-42.023438-6.988281 27.179688-12.21875 41.464844-32.476563 47.277344-58.011719-23.253906 2-77.253906-10-96.625-25.429688 21.371094-7.570312 41.371094-23.570312 49.371094-36.570312 0 0-38-18-64.824219-56.589844 52.101563 37.175782 114.148438 59.21875 178.953125 62.464844l52.871094 2.125-10.9375-46.9375-2.042969-9.308594c-.6875-3.773437-1.023437-6.972656-1.019531-9.695312.023438-17.617188 7.652344-34.882813 20.921875-47.363282 12.484375-11.742187 27.988281-17.695312 46.078125-17.695312 13.363281 0 26.558594 4.570312 37.511719 12.796875 17.488281 15.203125 26.488281 35.203125 26.488281 64.351563 0 29.910156-5.929688 61.429687-17.144531 91.148437zm0 0"
    />
  </svg>
)

const InstagramIcon = ({ logoColor }) => (
  <svg
    viewBox="0 0 26 26"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{ fill: `${logoColor}` }}
      fill={logoColor}
      d="m7.546875 0c-4.15625 0-7.546875 3.390625-7.546875 7.546875v10.90625c0 4.15625 3.390625 7.546875 7.546875 7.546875h10.90625c4.15625 0 7.546875-3.390625 7.546875-7.546875v-10.90625c0-4.15625-3.390625-7.546875-7.546875-7.546875zm0 2h10.90625c3.074219 0 5.546875 2.46875 5.546875 5.546875v10.90625c0 3.074219-2.46875 5.546875-5.546875 5.546875h-10.90625c-3.074219 0-5.546875-2.46875-5.546875-5.546875v-10.90625c0-3.074219 2.46875-5.546875 5.546875-5.546875zm12.953125 2c-.828125 0-1.5.671875-1.5 1.5s.671875 1.5 1.5 1.5 1.5-.671875 1.5-1.5-.671875-1.5-1.5-1.5zm-7.5 2c-3.855469 0-7 3.144531-7 7s3.144531 7 7 7 7-3.144531 7-7-3.144531-7-7-7zm0 2c2.773438 0 5 2.226563 5 5 0 2.773438-2.226562 5-5 5-2.773437 0-5-2.226562-5-5 0-2.773437 2.226563-5 5-5z"
    />
  </svg>
)

const DribbbleIcon = ({ logoColor }) => (
  <svg
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{ fill: `${logoColor}` }}
      fill={logoColor}
      d="m16.354 23.17c.02-.006.039-.014.059-.021 12.215-4.853 8.836-23.149-4.413-23.149-6.649 0-12 5.42-12 12 0 8.327 8.434 14.269 16.354 11.17zm-11.073-3.111c.852-1.432 3.609-5.472 8.315-6.866.984 2.509 1.674 5.436 1.742 8.755-3.566 1.199-7.327.392-10.057-1.889zm11.532 1.263c-.131-3.189-.782-6.017-1.71-8.467 2.082-.325 4.492-.108 7.225.987-.581 3.261-2.666 6.002-5.515 7.48zm5.672-9.031c-3.01-1.131-5.663-1.272-7.959-.834-.355-.8-.728-1.569-1.123-2.277 3.523-1.407 5.605-3.122 6.537-4.03 1.645 1.904 2.622 4.369 2.545 7.141zm-3.61-8.209c-.848.807-2.845 2.437-6.26 3.77-1.674-2.648-3.464-4.516-4.598-5.562 3.628-1.494 7.812-.856 10.858 1.792zm-12.292-1.059c.856.753 2.735 2.561 4.548 5.357-2.49.802-5.612 1.391-9.409 1.474.604-2.894 2.408-5.346 4.861-6.831zm-5.051 8.337c4.25-.069 7.69-.74 10.409-1.648.376.659.733 1.377 1.076 2.123-4.735 1.508-7.694 5.401-8.827 7.159-1.828-2.04-2.836-4.702-2.658-7.634z"
    />
  </svg>
)

const GithubIcon = ({ logoColor }) => (
  <svg
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    height="17"
    width="17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{ fill: `${logoColor}` }}
      fill={logoColor}
      d="m.184 10.462c-.779 4.906 1.401 10.823 8.123 13.006.12.022.231.032.335.032.782 0 1.32-.582 1.32-1.3-.097-.523.383-2.642-.92-2.357-2.519.536-2.821-.871-3.205-1.607 1.086 1.394 2.718 1.359 3.949.819.683-.3.326-1.064.65-1.343.496-.426.244-1.243-.407-1.314-2.314-.255-4.457-1.001-4.457-4.702 0-2.168 1.505-2.362 1.09-3.269-.015-.033-.333-.754-.045-1.849 1.419.262 2.072 1.28 2.753 1.097 1.687-.46 3.544-.46 5.23 0 .704.189 1.207-.801 2.738-1.103.441 1.654-.473 2.058.103 2.677.632.68.953 1.503.953 2.447 0 5.564-4.717 3.957-5.101 5.22-.088.288.005.599.235.792.61.513.53 1.83.465 2.889-.067 1.098-.125 2.045.482 2.579.214.19.595.393 1.284.253 6.634-2.131 8.83-8.022 8.063-12.917-2.096-13.368-21.526-13.352-23.638-.05zm8.27 10.978.004.505c-.523-.181-1.015-.39-1.475-.623.425.109.913.156 1.471.118zm.37-3.7c-.005.026-.01.053-.015.08-.853.252-1.509.001-1.957-.752 0-.001 0-.001-.001-.002.68.364 1.381.56 1.973.674zm3.176-15.74c11.833 0 14.502 16.267 3.469 19.941-.038-.297-.003-.857.021-1.252.058-.951.126-2.059-.213-2.985 5.088-1.059 5.513-6.646 3.554-9.135.243-.952.145-3.189-.729-3.463-.206-.065-1.305-.304-3.437 1.037-1.741-.416-3.62-.417-5.361 0-1.064-.667-3.462-1.752-3.922-.6-.534 1.342-.407 2.427-.248 3.03-1.739 2.204-1.218 5.894.534 7.626-.993-.475-2.361-.637-2.656.314-.323 1.037.912.911 1.679 2.804.073.236.208.513.415.788-6.811-5.565-3.525-18.105 6.894-18.105z"
    />
  </svg>
)

const CodepenIcon = ({ logoColor }) => (
  <svg
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{ fill: `${logoColor}` }}
      fill={logoColor}
      d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"
    />
  </svg>
)

const Bio = props => {
  const logoColor = props.isDarkMode
    ? "rgba(255, 255, 255, 0.9)"
    : "rgb(55, 53, 47)"

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <AvatarLink to="/blog/">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </AvatarLink>
            <p>
              By <strong>{author}</strong>, who occasionally has useful things
              to share.
              <br />
              {` `}
              <Social
                href={`https://t.wang.sh/youtube`}
                alt="youtube"
                aria-label="youtube link"
                style={{ marginTop: "4px" }}
              >
                <YoutubeIcon logoColor={logoColor} />
              </Social>
              <Social
                href={`https://twitter.com/${social.twitter}`}
                alt="twitter"
                aria-label="twitter link"
                style={{ marginLeft: "1px" }}
              >
                <TwitterIcon logoColor={logoColor} />
              </Social>
              <Social
                href={`https://instagram.com/${social.instagram}`}
                alt="instagram"
                aria-label="instagram link"
                style={{ marginRight: "3px" }}
              >
                <InstagramIcon logoColor={logoColor} />
              </Social>
              <Social
                href={`https://dribbble.com/${social.dribbble}`}
                alt="dribbble"
                aria-label="dribbble link"
              >
                <DribbbleIcon logoColor={logoColor} />
              </Social>
              <Social
                href={`https://github.com/${social.github}`}
                alt="github"
                aria-label="github link"
                style={{ marginLeft: "3px", marginRight: "3px" }}
              >
                <GithubIcon logoColor={logoColor} />
              </Social>
              <Social
                href={`https://codepen.io/${social.codepen}`}
                alt="codepen"
                aria-label="codepen link"
                style={{ marginRight: "4px" }}
              >
                <CodepenIcon logoColor={logoColor} />
              </Social>
              <RSSLink
                href="https://www.thomaswang.io/feed.xml"
                logoColor={logoColor}
              >
                rss
              </RSSLink>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          instagram
          github
          codepen
          dribbble
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(Bio)

const Container = styled.div`
  display: flex;
`

const AvatarLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: #ffffff;

  &:hover {
    opacity: 0.75;
  }
`

const Social = styled.a`
  vertical-align: middle;
  display: inline-block;
  margin: auto 2px;
  text-decoration: none;
  box-shadow: none;
  color: #ffffff;

  &:hover {
    opacity: 0.75;
  }

  svg > path,
  svg > g > path {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const RSSLink = styled.a`
  display: inline-block;
  text-decoration: underline;
  box-shadow: none;
  color: ${props => props.logoColor};
  margin-left: 4px;

  &:hover {
    opacity: 0.75;
  }
`
