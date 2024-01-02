export default function Page() {
  return (
    <>
      <div className='container mx-auto mt-20 flex flex-col items-center justify-center'>
        <h1 className='decoration-3 animate-bounce font-mono text-5xl font-bold text-warning underline decoration-warning decoration-dashed underline-offset-8'>
          About me
        </h1>
        <div className='mb-7 mt-14 flex gap-x-8'>
          <button className='rounded-2xl bg-danger-300 px-8 py-3 font-mono text-xl font-bold text-default-900 transition duration-500 hover:bg-default-900 hover:text-danger-300'>
            Likes
          </button>
          <button className='rounded-2xl bg-success-300 px-8 py-3 font-mono text-xl font-bold text-default-900 transition duration-500 hover:bg-default-900 hover:text-success-300'>
            History
          </button>
          <button className='rounded-2xl bg-primary-300 px-8 py-3 font-mono text-xl font-bold text-default-900 transition duration-500 hover:bg-default-900 hover:text-primary-300'>
            Skills
          </button>
        </div>
        <div className='flex w-full flex-col gap-x-8 gap-y-4'>
          <div className='flex w-full items-center gap-x-2'>
            <h2 className='w-1/2 text-right text-2xl font-bold'>名前</h2>
            <p className='w-1/2 text-left font-mono text-xl font-semibold'>もーりー</p>
          </div>
          <div className='flex w-full items-center gap-x-2'>
            <h2 className='w-1/2 text-right text-2xl font-bold'>年齢</h2>
            <p className='w-1/2 text-left font-mono text-xl font-semibold'>16</p>
          </div>
          <div className='flex w-full items-center gap-x-2'>
            <h2 className='w-1/2 text-right text-2xl font-bold'>誕生日</h2>
            <p className='w-1/2 text-left font-mono text-xl font-semibold'>
              2007年12月18日
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
