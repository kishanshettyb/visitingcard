"use client";
import { useState, useEffect } from "react";
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
  const [name, setName] = useState("Kavya Shree.V");
  const [phone, setPhone] = useState("+91 9900022506");
  const [email, setEmail] = useState("iandukavya@gmail.com");
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !phone || !email) {
      alert("All fields must be filled out");
      return;
    }

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

  // Only render the Drawer component after client-side is ready
  if (!isClient) {
    return null;
  }

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
                  value={name} // Use state value here
                  onChange={(e) => setName(e.target.value)} // Update state on change
                  required
                />
              </div>
              <div className="py-2">
                <label>Phone: </label>
                <input
                  className="p-2 border border-slate-100 rounded-md ml-2"
                  type="text"
                  value={phone} // Use state value here
                  onChange={(e) => setPhone(e.target.value)} // Update state on change
                  required
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  className="p-2 border border-slate-100 rounded-md ml-2"
                  type="email"
                  value={email} // Use state value here
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
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
