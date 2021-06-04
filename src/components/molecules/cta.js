import React from "react";
import { Link } from "gatsby";

const Cta = ({ data }) => {
  const isInternalLink = data.url && /^\/(?!\/)/.test(data.url);
  return (
    <>
      {
        isInternalLink &&
        <Link
          to={data.url}
          className={`[ cta ${data.secondary ? 'cta--secondary' : ''}]`}
          data-value={data.title}>
          {data.title}
        </Link>
      }
      {
        !isInternalLink &&
        <a
          href={data.url}
          className={`[ cta ${data.secondary ? 'cta--secondary' : ''}]`}
          data-value={data.title}>
          {data.title}
        </a>
      }
    </>
  )
}

export default Cta;