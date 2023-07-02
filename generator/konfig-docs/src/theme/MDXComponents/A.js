import React, { useContext, useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Link from "@docusaurus/Link";
import innerText from "react-innertext";
import { VideoSectionContext } from "@site/src/components/VideoSection";

export default function MDXA(props) {
  const video = useContext(VideoSectionContext);
  const [error, setError] = useState(false);
  const [vtt, setVtt] = useState();

  const fetchVtt = async () => {
    if (video?.current == undefined) return;
    const response = await fetch(
      `${video.current.props.url.split(".")[0]}.vtt`,
      { cache: "force-cache", mode: "same-origin" }
    );
    const vtt = parseVttContents(await response.text());
    setVtt(vtt);
  };

  const getCue = async () => {
    if (video?.current === undefined) return;
    if (vtt === undefined) return;
    const childText =
      typeof props.children === "string"
        ? props.children
        : props.children.map(innerText).join("");
    console.log(childText);
    const cue = vtt.filter(({ text }) => text.includes(childText));
    if (cue.length === 0 || cue.length > 1) {
      setError(true);
      return;
    }
    return cue[0];
  };

  useEffect(() => {
    if (props.href !== "seek") return;
    fetchVtt();
  }, []);

  // Validate links to video in dev mode
  if (process.env.NODE_ENV !== "production") {
    useEffect(() => {
      getCue();
    }, [vtt]);
  }

  if (props.href === "seek") {
    const { children, ...aProps } = props;
    return (
      <span
        onClick={async () => {
          const cue = await getCue();
          if (cue === undefined) return;
          const seconds = parseVttTimestamp(cue.startTime);
          video.current.seekTo(seconds, "seconds");
        }}
        style={{ cursor: "pointer", color: error ? "red" : undefined }}
        className="ch-section-link"
        {...aProps}
      >
        {children}
      </span>
    );
  }
  return <Link {...props} />;
}

function parseVttContents(contents) {
  const cues = [];

  // Match the cue blocks in the VTT file with two different timestamp formats
  const cueRegex =
    /(\d{2}:\d{2}:\d{2}\.\d{3})\s+-->\s+(\d{2}:\d{2}:\d{2}\.\d{3}).*?\n((?:.+\n?)*)|\[(\d{2}:\d{2}:\d{2}\.\d{3})\]\s+\[(\d{2}:\d{2}:\d{2}\.\d{3})\].*?\n((?:.+\n?)*)/g;
  let match;

  // Iterate over all the cue matches
  while ((match = cueRegex.exec(contents))) {
    const startTime = match[1] || match[4];
    const endTime = match[2] || match[5];
    const text = match[3] || match[6];

    // Create a cue object
    const cue = {
      startTime: startTime,
      endTime: endTime,
      text: text.trim(),
    };

    cues.push(cue);
  }
  return cues;
}

function parseVttTimestamp(timestamp) {
  const parts = timestamp.split(":");

  // Parse the hours, minutes, seconds, and milliseconds from the timestamp
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  if (parts.length === 3) {
    hours = parseInt(parts[0], 10);
    minutes = parseInt(parts[1], 10);
    const secondsAndMilliseconds = parts[2].split(".");
    seconds = parseInt(secondsAndMilliseconds[0], 10);
    milliseconds = parseInt(secondsAndMilliseconds[1], 10);
  } else if (parts.length === 2) {
    minutes = parseInt(parts[0], 10);
    const secondsAndMilliseconds = parts[1].split(".");
    seconds = parseInt(secondsAndMilliseconds[0], 10);
    milliseconds = parseInt(secondsAndMilliseconds[1], 10);
  }

  // Calculate the total seconds
  const totalSeconds =
    hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;

  return totalSeconds;
}
