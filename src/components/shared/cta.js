import React from "react";
import { Link } from "gatsby";

const Cta = ({data}) => {
  return (
    <Link to={data.url}
    className={`[ cta ${data.secondary ? 'cta--secondary' : ''}]`}
    data-value={data.title}>
      {data.title}
    </Link>
  )
}

export default Cta;