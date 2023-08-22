import { Block } from "payload/types";

const Youtube: Block = {
  slug: "youtube",
  labels: {
    singular: "Youtubeblock",
    plural: "Youtubeblöcke",
  },
  interfaceName: "YoutubeBlock",
  fields: [
    {
      name: "link",
      type: "text",
      label: "Youtubelink",
      required: true,
    },
  ],
};

export default Youtube;
