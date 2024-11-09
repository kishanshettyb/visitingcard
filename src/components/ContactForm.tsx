"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate VCF content
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD`;

    // Create a blob from the VCF content
    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name.replace(/\s+/g, "_")}_contact.vcf`;
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link and revoking the object URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="lg" className="w-full mt-5">
          Save Contact
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Kavya Shree.V</DrawerTitle>
            <DrawerDescription>Director of Operations.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name: </label>
                <input
                  className="p-2 border border-slate-100 rounded-md ml-2"
                  type="text"
                  value="Kavya Yadav"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Phone: </label>
                <input
                  className="p-2 border border-slate-100 rounded-md ml-2"
                  type="text"
                  value="+91 9900022506"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  className="p-2 border border-slate-100 rounded-md ml-2"
                  type="email"
                  value="iandukavya@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button className="w-full mt-5 mb-10" size="lg" type="submit">
                Download and Save
              </Button>
            </form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
