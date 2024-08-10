"use client";

import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import "@blocknote/mantine/style.css";

export function Editor() {
  const editor = useCreateBlockNote();

  return <BlockNoteView editor={editor} />;
}
