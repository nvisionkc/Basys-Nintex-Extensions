import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import { IFrame } from "./Iframe";

class IFrameWrapper extends reactToWebComponent(IFrame, React, ReactDOM, {
  shadow: "open",
  props: ["name", "title", "src", "height"],
}) {
  static getMetaConfig = () =>
    Promise.resolve({
      controlName: "basys-aot-app-validator",
      fallbackDisableSubmit: false,
      description: "BASYS application validator and version checker",
      iconUrl: "one-line-text",
      groupName: "BASYS",
      version: "1.3",
      properties: {
        current: {
          type: "string",
          title: "Current Version",
          description:
            "Current version of the application. This is the version that will be compared to the version in the BASYS application.",
        },
        overlap: {
          type: "string",
          title: "Overlap Version",
          description:
            "Overlapping version of the application if exists. This version will also be compared to the version in the BASYS application.",
        },
        width: {
          type: "string",
          title: "Width",
          description: "Width of the component",
        },
        height: {
          type: "string",
          title: "Height",
          description: "Height of the component",
        },
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true,
      },
    });
}

customElements.define("basys-aot-app-validator", IFrameWrapper);
