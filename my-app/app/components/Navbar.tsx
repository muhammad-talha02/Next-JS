'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()

    return (
        <div>
            <h1>Header</h1>
            <button onClick={()=> router.push("/notes")}>Go Home</button> <br />
            <Link href={"/notes"}>Go to Notes</Link> <br />
            <Link href={"/dashboard"}>Go to Dashboard</Link> <br />
            <Link href={`/notes/${3}`}>Go to Single Note </Link> <br /> <br /> <br />
        </div>
    )
}

export default Navbar
