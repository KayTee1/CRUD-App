import EditTopicForm from "@/components/EditTopicForm";
import { baseUrl } from "@/utils/getBaseUrl";
import React from "react";

type Topic = {
  _id: string;
  title: string;
  description: string;
};

const getTopicById = async (id: string): Promise<Topic | undefined> => {
  try {
    const res = await fetch(baseUrl + `/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const topic = await res.json();
    return topic;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

type EditTopicProps = {
  params: {
    id: string;
  };
};

const EditTopic = async ({ params }: EditTopicProps) => {
  const { id } = params;
  const topic = await getTopicById(id);

  if (!topic) {
    console.error("Topic not found");
    return <div>Error loading topic</div>;
  }

  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
