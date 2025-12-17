export default function Price() {
    return(
        <>
        <div className="bg-white/50 backdrop-blur-sm min-h-screen pt-20 px-4">
            <h1 className="text-3xl font-bold mb-4">Tuition and Fees</h1>
            <div className="bg-white/50 backdrop-blur-sm min-h-screen pt-20 px-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 border-b text-left">Grade Level</th>
                        <th className="py-3 px-4 border-b text-left">Fee Type</th>
                        <th className="py-3 px-4 border-b text-left">Registration Fee</th>
                        <th className="py-3 px-4 border-b text-left">Miscellaneous Fee</th>
                        <th className="py-3 px-4 border-b text-left">Total Annual Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b">Junior Sec</td>
                        <td className="py-3 px-4 border-b">Academy with Islamiyyah</td>
                        <td className="py-3 px-4 border-b">	₦121,700.00</td>
                        <td className="py-3 px-4 border-b">	₱2,000</td>
                        <td className="py-3 px-4 border-b">₱13,500</td>
                    </tr>
                </tbody>        
            </table>
            </div>
        </div>
        </>
    )
}