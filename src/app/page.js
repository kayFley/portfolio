import Banner from "./components/Banner";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="container mt-24 mx-auto px-12 py-4">
                <Banner />
            </div>
        </main>
    );
}
