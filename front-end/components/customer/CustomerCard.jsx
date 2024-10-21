export const CustomerCard=({customer})=>{
    return <div className="w-1/2 max-w-[100px] p-2 flex justify-center items-center rounded-lg ring-1">{customer?.name}</div>
}