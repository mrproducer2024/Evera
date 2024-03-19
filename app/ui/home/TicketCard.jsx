import Link from "next/link";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("fa-IR", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div >
      <a href={`/Tickets/${ticket._id}`} style={{ display: "contents" }}>
      
        <div className=" rounded-md bg-gray-800 shadow-lg">
          <div className="flex px-4 leading-none  flex-col">
            <div className="flex-none ">
              <img
               src={ticket.imgurl} alt={ticket.title}
                className="h-full w-full rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold">{ticket.title}</p>
              <hr className="hr-text" data-content="" />
              <p className="block px-4 my-4 text-sm">
              {ticket.description}
              </p>
              <p className="block px-4 my-4 text-sm">
              {createdDateTime}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TicketCard;
