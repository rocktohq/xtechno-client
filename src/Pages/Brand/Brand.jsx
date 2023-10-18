import { useLoaderData } from "react-router-dom"

const Brand = () => {

  const brandInfo = useLoaderData()
  console.log(brandInfo)

  return (
    <div>
      Brand
    </div>
  )
}

export default Brand
