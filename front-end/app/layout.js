import { CartContextProvider } from "@/components/cart/CartContext";
import "./globals.css";
export const metadata={
  title:"Step by step",
  description:"Step at a time is the key to happiness life"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <CartContextProvider>
        <div className="w-full h-screen min-w-[240px] max-w-[1200px] m-auto shadow-md flex flex-col gap-5">
        {children}
        </div>
        </CartContextProvider>
      </body>
    </html>
  );
}
