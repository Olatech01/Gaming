import Image from 'next/image'
import React from 'react'

const NewRelease = () => {

    const newRelease = [
        {
            id: 1,
            title: 'Cyberpunk 2077',
            img: '/truck.svg',
            model: 'WB Games / CD Project Red',
            game: 'PS4'
        },
        {
            id: 2,
            title: 'Red Dead Redemption 2',
            img: '/hitman.svg',
            model: 'IO Interactive',
            game: 'PS4'

        },
        {
            id: 3,
            title: 'Destruction Allstars',
            img: '/allstar.svg',
            model: 'SIE / Lucid Games',
            game: 'PS5'
        },
        {
            id: 4,
            title: 'Godfall',
            img: '/godfall.svg',
            model: 'Gearbox / Counterplay Games',
            game: 'PS5'
        },
        {
            id: 5,
            title: 'FIFA 25',
            img: '/fifa.svg',
            model: 'EA Sports',
            game: 'PS4'
        },
        {
            id: 6,
            title: 'Ghost Of Tsushima: Leg...',
            img: '/ghost.svg',
            model: 'SIE / Sucker Punch',
            game: 'PS4'
        },
        {
            id: 7,
            title: 'Watch Dogs Legion',
            img: '/watch.svg',
            model: 'Ubisoft',
            game: 'PS4'
        },
        {
            id: 8,
            title: 'Cloudpunk',
            img: '/cloud.svg',
            model: 'Maple Whispering / Ion Lands',
            game: 'PS4'
        },
        {
            id: 9,
            title: 'Crysis Remastered',
            img: '/cry.svg',
            model: 'Crytek',
            game: 'PS4'
        },
        {
            id: 10,
            title: 'Far Cry 6',
            img: '/far.svg',
            model: 'Ubisoft',
            game: 'PS5'
        },
        {
            id: 11,
            title: 'This Is The Zodiac Spea...',
            img: '/this.svg',
            model: 'Klabater / Punch Punk Games',
            game: 'PS4'
        },
        {
            id: 12,
            title: 'NBA 2K21',
            img: '/nba.svg',
            model: '2K Sports / Visual Concepts',
            game: 'PS4'
        },
    ]
  return (
    <div className='w-full px-[7rem] flex flex-col gap-3'>
        <h2 className='text-[25px] font-extrabold text-white'>New Release</h2>
        <div className='grid grid-cols-6 w-full gap-3'>
            {newRelease.map(item => (
                <div key={item.id} className='flex gap-[5px] flex-col w-full border border-slate-800 rounded-md'>
                    <Image height={100} width={100} className='w-full' src={item.img} alt={item.title} />
                    <div className='px-2 py-3 flex flex-col gap-2'>
                        <h3 className='text-[14px] font-medium text-white'>{item.title}</h3>
                        <p className='text-[12px] text-gray-400'>{item.model}</p>
                        <p className='text-[12px] text-gray-400 border border-gray-600 p-1 w-fit rounded-md'>{item.game}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewRelease