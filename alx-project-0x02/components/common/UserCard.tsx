import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website, company }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm">📍 {address.city}, {address.street}</p>
      <p className="text-gray-500 text-sm">📞 {phone}</p>
      <p className="text-gray-500 text-sm">🌐 {website}</p>
      <p className="text-gray-600 mt-2 italic">Works at {company.name}</p>
    </div>
  );
};

export default UserCard;
