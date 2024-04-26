type ImageShape = { tagName: "image"; attributes: { cols: 3; name: "text" } };

type InputShape = {
  tagName: "input";
  attributes: {
    name: "demo";
    type: "text";
  };
};

type TextAreaShape = {
  tagName: "area";
  attributes: { cols: 3; name: "text" };
};

type HTMLShape = ImageShape | InputShape | TextAreaShape;
