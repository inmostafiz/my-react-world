import React, { useState } from "react";
import ticketsData from "./data/tickets";
import Footer from "./components/Footer";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Banner from "./components/Banner"; 
import Navbar from "./components/Navbar"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleSelect = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, { ...ticket, status: "In-Progress" }]);
      toast.info(`Ticket "${ticket.title}" moved to In Progress`);
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, { ...ticket, status: "Resolved" }]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success(`Ticket "${ticket.title}" marked as Resolved`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />
      <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6 py-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <TaskStatus tasks={inProgress} onComplete={handleComplete} />
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer/>
    </div>
  );
}

export default App;