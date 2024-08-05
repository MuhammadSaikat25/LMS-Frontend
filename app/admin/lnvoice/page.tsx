'use client'
import InvoiceComponent from "@/app/components/admin/Invoice/InvoiceComponent";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import React from "react";

const Invoice = () => {
  return (
    <div>
      <Heading title="Admin Dashboard" />
      <div className="lg:flex h-screen bg-[#010313]">
        <div className=" 800px:block 1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[100%]">
          <InvoiceComponent />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
