import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${error?.status}`}</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-center items-center space-y-2">
        <h1 className="text-center text-4xl lg:text-5xl font-bold">Error: {error?.status}</h1>
        <p className="text-xl lg:text-2xl font-medium">{error?.statusText}</p>
        <Link to="/" className="text-center"><button className="btn btn-secondary rounded">&#171; Home Page</button></Link>
      </div>
    </HelmetProvider>
  )
}

export default ErrorPage
