import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    const data = [
        { id: 1, name: 'John Doe', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 2, name: 'Jane Smith', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 3, name: 'Sam Wilson', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
    ];

    const previous = [
        { id: 1, name: 'John Doe', name2: 'John Doe', score: '2-1', winner: 'John Doe' },
        { id: 2, name: 'Jane Smith', name2: 'John Doe', score: '3-2', winner: 'Jane Smith' },
        { id: 3, name: 'Sam Wilson', name2: 'John Doe', score: '2-4', winner: 'John Doe' },
    ]

    return (
        <div className='flex flex-col gap-10'>
            <div className='border-2 flex items-center justify-between py-5 px-[4rem] sm:flex-col'>
                <div className='flex flex-col items-center gap-3'>
                    <Image height={100} width={300} src={"/player1.svg"} className='' />
                    <p className='text-[16px] font-semibold'>JohnDoe</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <h2 className='text-[16px] font-semibold'>VS</h2>
                    <p className='text-[14px] font-medium'>3 am</p>
                    <p className='text-[14px] font-medium'>05/09/2024</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <Image height={100} width={300} src={"/profile.svg"} />
                    <p className='text-[16px] font-semibold'>JamesSmith</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className='flex justify-between items-center'>
                    <h2 className='text-[20px] font-medium'>Fixtures</h2>
                    <button className='px-4 h-[30px] rounded-md bg-gray-700 text-white'>View All</button>
                </div>
                <div className="overflow-x-auto sm:overflow-x-scroll lg:overflow-x-visible">
                    <table className="min-w-full border border-gray-300 bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Home</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Away</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id} className="border-b">
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.name2}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[20px] font-medium'>Previous Fixtures</h2>
                    {/* <button className='px-4 h-[30px] rounded-md bg-gray-700 text-white'>View All</button> */}
                </div>
                <div className="overflow-x-auto sm:overflow-x-scroll lg:overflow-x-visible">
                    <table className="min-w-full border border-gray-300 bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Home</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Away</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Score</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {previous.map((row) => (
                                <tr key={row.id} className="border-b">
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.name2}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.score}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.winner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard