import Link from "next/link"

const getData =async ()=>{
  const req=await fetch('https://dummyjson.com/products')
  const data = await req.json()
 
  return {data}
}


const  Home =  async() => {
  const{data}=await getData()
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-8">Products</h1>
      <div className="w-full flex flex-wrap gap-6 justify-center ">
      {data.products.map((prod)=>{
        return <div className=""  key={prod.id}>
          <div className="">
          <Link href={`/singleProduct/${prod.id}`}className="group relative block bg-gray-400 max-w-[400px] h-[470px] rounded-xl ">
        <img
      alt="img"
      src={prod.thumbnail}
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />
      
        <div className="relative p-4 sm:p-6 lg:p-8">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{prod.brand}</p>
      <p className="text-xl font-bold text-white sm:text-2xl">{prod.title}</p>
      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div
          className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p className="text-sm text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
          </p>
        </div>
      </div>
        </div>
      </Link>
          </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Home