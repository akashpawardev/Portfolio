export default function Footer() {
  const Menu = [
    { link: "https://x.com/vivarko", src: "linkedin.webp" },
    { link: "https://github.com/vivarko", src: "github.webp" },
    { link: "https://twtich.tv/@vivarko", src: "insta.webp" },
  ];
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-40 border-b-2 border-gray-700 rounded bg-gray-50 dark:bg-gray-800">
        <p className='text-sm p-4 text-white'>Де мене можна знайти</p>
        <div className='flex flex-row gap-3'>
          {Menu.map((menu) => (
            <a target='_blank' aria-label="Socials" rel="noopener noreferrer" href={menu.link}>
              <img className='w-6 h-6' alt="" src={`./assets/${menu.src}`} />
            </a>
          ))}
        </div>
      </div>
      <div className='flex justify-center bg-gray-800'>
        <p className='p-4 text-center text-white'>Зроблено на колінах <a className=" text-white pb-0.5 border-b-2 border-b-white hover:text-blue-500 hover:border-b-blue-500" target='_blank' href='https://discord.com/users/247615596441763843'>@vivarko</a></p>
      </div>
    </section>
  )
}

