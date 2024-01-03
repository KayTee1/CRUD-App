import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    desciprtion: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
