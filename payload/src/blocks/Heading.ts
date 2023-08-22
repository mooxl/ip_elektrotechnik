import { Block } from "payload/types";

const Heading: Block = {
  slug: "heading",
  labels: {
    singular: "Überschriftenblock",
    plural: "¨Überschriftenblöcke",
  },
  interfaceName: "HeadingBlock",
  fields: [
    {
      name: "alignment",
      type: "radio",
      label: "Ausrichtung",
      defaultValue: "left",
      options: [
        {
          label: "Links",
          value: "left",
        },
        {
          label: "Mitte",
          value: "center",
        },
        {
          label: "Rechts",
          value: "right",
        },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Überschrift",
      required: true,
    },
    {
      name: "typeHeading",
      type: "select",
      label: "Typ",
      required: true,
      options: [
        { label: "Erstes Wort in Mint", value: "mint" },
        { label: "Mint unterstrichen", value: "underline" },
        { label: "Brauner Strich an der Seite", value: "brown" },
        { label: "Komplett in Mint", value: "mint-full" },
      ],
    },
  ],
};

export default Heading;
