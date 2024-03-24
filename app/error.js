"use client";

export default function error({ error, reset }) {
  return <div>{error?.message}</div>;
}
