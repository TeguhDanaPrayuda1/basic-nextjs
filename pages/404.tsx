import { useEffect } from "react"
import router, { useRouter } from "next/router"

export default function Costum404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')//kembalikan ke halaman homepage
        }, 2000)
    }, [])//ditambahkan array kosong agar dipanggil hanya pertama kali saja
    return (
        <div className="title-costum">
            <h1>Ooopppsss.... Halaman yang anda cari tidak ada</h1>
        </div>
    )
}
