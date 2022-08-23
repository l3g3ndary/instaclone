import Head from "next/head"
import Feed from "../components/Feed"
import Header from "../components/Header"

export default function index() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <Head>
          <title>Instagram App Clone</title>
        </Head>

        {/* HEADER */}

        <Header />

        {/* FEED */}

        <Feed/>

        {/* MODAL */}

      </div>
    </div>
  )
}
