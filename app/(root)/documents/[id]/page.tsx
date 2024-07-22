import React from "react";
import { Editor } from "@/components/editor/Editor";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";

const Document: React.FC = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Title</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
