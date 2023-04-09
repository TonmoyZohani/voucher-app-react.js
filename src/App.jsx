import InvoiceForm from "./components/InvoiceForm";
import Navbar from "./components/Navbar";

function Appp() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl mt-4">
        <Navbar />
        <InvoiceForm />
      </div>
    </div>
  );
}

export default Appp;
