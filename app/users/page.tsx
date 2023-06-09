export default async function Users() {
    // console.log("usersList");
    const res = await fetch("https://api.github.com/users");
    const usersList = await res.json();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="users__wrapper">
                <div className="users__title">Users 12</div>
                <div className="users__list">
                    <ul>
                    {usersList.map((user:{id: number; login: string; }) => (
                        <li key={user.id}>{user.login}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}