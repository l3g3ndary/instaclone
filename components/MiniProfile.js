export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="h-16 rounded-full border p-[2px]" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80g" alt="User Image" />
        <div className="flex-1 ml-4">
          <h2 className="font-bold">Admin</h2>
          <h3 className="text-sm text-gray-400">Welcome to Instaclone</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}
