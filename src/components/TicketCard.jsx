import React from "react";

const statusColors = {
  Open: "bg-[#B9F8CF] text-[#0B5E06]",
  "In-Progress": "bg-yellow-100 text-yellow-700",
  Resolved: "bg-gray-200 text-gray-600",
};

const priorityColors = {
  High: "text-red-600 font-semibold",
  Medium: "text-yellow-600 font-semibold",
  Low: "text-green-600 font-semibold",
};

const TicketCard = ({ ticket, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg cursor-pointer transition"
      onClick={() => onSelect(ticket)}
    >

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-900">{ticket.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${statusColors[ticket.status]}`}
        >
          {ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-600">{ticket.description}</p>

      <div className="flex justify-between items-center mt-4 text-xs">
        <div>
          <p className="font-medium text-gray-800">{ticket.customer}</p>
          <p className="text-gray-400">#{ticket.id}</p>
        </div>
        <div className="text-right">
          <p className={priorityColors[ticket.priority]}>
            {ticket.priority} Priority
          </p>
          <p className="text-gray-400">{ticket.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;