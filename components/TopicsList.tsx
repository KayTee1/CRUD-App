import React from "react";
import SingleTopicCard from "./SingleTopicCard";

import { baseUrl } from "@/utils/getBaseUrl";

const getTopics = async () => {
  try {
    const res = await fetch(baseUrl, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topics: ", error);
  }
};

type Topic = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default async function TopicsList() {
  const { topics } = (await getTopics()) || { topics: [] };

  return (
    <>
      {topics.length === 0 ? (
        <p>No Topics Yet!</p>
      ) : (
        topics.map((topic: Topic, index: number) => (
          <SingleTopicCard key={index} topic={topic} />
        ))
      )}
    </>
  );
}
