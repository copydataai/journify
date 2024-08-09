"use server";

import { Button } from "@acme/ui/button";
import { Card, CardContent } from "@acme/ui/card";

import { Editor } from "~/app/_components/Editor";

export default async function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Brotherhood
        </h1>
        <img src="/brotherhood-profile.webp" alt="brotherhood logo" />

        <div className="flex w-full max-w-2xl flex-col items-center justify-center overflow-y-scroll">
          <Button variant="primary">define who you are</Button>
          <Card className="w-[350px]">
            <CardContent>
              <Editor />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
