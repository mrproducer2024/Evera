"use client";
import BreadCrump from "../../../ui/components/BreadCrump";
import CommentForm from "../../../ui/components/CommentForm";
import CommentsSec from "../../../ui/components/CommentsSec";
import useBattle from "../../../ui/home/useBattle";
const Ticket = () => {
  const battle = useBattle();

  if (!battle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <img
            className="w-full p-3"
            src={battle.imgurl}
            title={battle.title}
            alt={battle.title}
            width="880"
            height="450"
            loading="lazy"
          />
          <BreadCrump />
          <div className="p-4">
            <h1 className="text-center mb-3">{battle.title}</h1>
            <p>
              {battle.description}
            </p>
            <p>{battle.body}</p>
            <CommentsSec />
            <CommentForm />
          </div>
        </div>
        <div className="col-span-0 md:col-span-4 lg:col-span-3">
        </div>
      </div>
    </>
  );
};

export default Ticket;
