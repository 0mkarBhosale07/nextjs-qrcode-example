import Qrcode from "./components/Qrcode";

export default function Home() {
  // console.log(process.env.UPI_ID);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Qrcode amount={1000} />
      </div>
    </div>
  );
}
