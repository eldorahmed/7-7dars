const getData = async (id) => {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return { data };
};

const SingleProduct = async ({ params }) => {
  const { data } = await getData(params.id);
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={data.thumbnail}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
                {data.title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {data.description}
            </p>
           <p className="mt-9">$ {data.price}</p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Buy
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleProduct;
