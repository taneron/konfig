const regexPattern = /^::SAVE\[(.*)\]\/(.*)/;
export function captureSaveOutput({ line }: { line: string }) {
  const matches = line.match(regexPattern);

  if (matches !== null) {
    const label = matches[1];
    const value = matches[2];
    return { label, value };
  }
}
