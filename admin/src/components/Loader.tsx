export default function Loader({ show = true }: { show?: boolean }) {

    return <>
        {
            show && <div className="fixed space-x-2 top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-200 to-purple-300 i z-50">
                <div className="loader"></div>
            </div>
        }
    </>

}