import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

type Topic = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const SingleTopicCard = ({ topic }: { topic: Topic }) => {
  const { _id, title, description } = topic;

  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <div>{description}</div>
      </div>

      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={`/EditTopic/${_id}`}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SingleTopicCard;
