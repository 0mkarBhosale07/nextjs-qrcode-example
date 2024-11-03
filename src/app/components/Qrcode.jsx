"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import generateQR from "@omkarbhosale/upiqr";

const Qrcode = ({ amount }) => {
  const [qrCode, setQrCode] = useState(null);
  const [error, setError] = useState(null);

  console.log(process.env.NEXT_PUBLIC_UPI_ID);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        // Generate the QR code as a Base64 URL
        const data = await generateQR({
          UPI_ID: process.env.NEXT_PUBLIC_UPI_ID,
          AMOUNT: amount,
        });
        setQrCode(data);
      } catch (error) {
        setError("Error generating QR code");
        console.error("Error generating QR code:", error);
      }
    };

    fetchQRCode();
  }, [amount]);

  return (
    <div>
      <h2>UPI QR Code</h2>
      {error ? (
        <p>{error}</p>
      ) : qrCode ? (
        <Image src={qrCode} width={200} height={200} alt="QR Code image" />
      ) : (
        <p>Generating QR Code...</p>
      )}
    </div>
  );
};

export default Qrcode;
