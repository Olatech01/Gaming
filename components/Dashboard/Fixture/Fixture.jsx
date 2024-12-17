import React from 'react'

const Fixture = () => {
    const data = [
        { id: 1, name: 'John Doe', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 2, name: 'Jane Smith', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 3, name: 'Sam Wilson', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 4, name: 'John Doe', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 5, name: 'Jane Smith', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 6, name: 'Sam Wilson', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 7, name: 'John Doe', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 8, name: 'Jane Smith', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
        { id: 9, name: 'Sam Wilson', name2: 'John Doe', date: '09/12/2024', time: '05:52pm' },
    ];
    const previous = [
        { id: 1, name: 'John Doe', name2: 'John Doe', score: '2-1', winner: 'John Doe' },
        { id: 2, name: 'Jane Smith', name2: 'John Doe', score: '3-2', winner: 'Jane Smith' },
        { id: 3, name: 'Sam Wilson', name2: 'John Doe', score: '2-4', winner: 'John Doe' },
    ]
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[20px] font-bold underline'>Group A</h2>
                <ul className='flex flex-col gap-1 text-[16px]'>
                    <li>Sam Wilson</li>
                    <li>John Doe</li>
                    <li>Sodiq Idan</li>
                    <li>Ibrahim Jay</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
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

export default Fixture