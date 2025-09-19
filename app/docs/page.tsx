"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Github, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CodeBlock } from "@/components/ui/code-block";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useFeedbackStore } from "@/lib/store";

export default function DocsPage() {
  const { setIsOpen } = useFeedbackStore();
  const [mounted, setMounted] = useState(false);
  const [showGemini, setShowGemini] = useState(true);
  const [showGeminiVision, setShowGeminiVision] = useState(true);
  const [showGeminiStreaming, setShowGeminiStreaming] = useState(true);
  const [showGeminiProvider, setShowGeminiProvider] = useState(true);
  const [showGeminiEnv, setShowGeminiEnv] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex md:pl-64">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 transition-colors duration-300 hidden md:block fixed left-0 top-0 h-screen overflow-y-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              use-every-llm
            </Link>
            <ThemeToggle />
          </div>

          <nav className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Getting Started
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#installation"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Features Supported
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#models"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Models and APIs Supported
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Usage
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#sample-code"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Sample Code for every kind of call
                  </a>
                </li>
                <li>
                  <a
                    href="#whats-next"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    What's Next?
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm text-left w-full"
                  >
                    Issues You Faced
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm text-left w-full"
                  >
                    Your Suggestions
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="min-w-0 w-full mx-auto p-4 md:p-8 max-w-3xl lg:max-w-4xl">
          {/* <div className="flex-1 p-4 md:p-8 max-w-none md:max-w-4xl md:ml-64" > */}
          <div className="md:hidden mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              use-every-llm
            </Link>
            <ThemeToggle />
          </div>

          {/* Header */}
          <div className="hidden md:flex items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
            <Link href={"https://github.com/Shayan12456/use-every-llm"}>
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <span className="text-2xl font-bold">use-every-llm</span>
              </div>
            </Link>
          </div>

          {/* Features Supported */}
          <section id="features" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Features Supported</h2>
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Text Generation
                  </h3>
                  <div className="grid grid-cols-3 gap-4 md:gap-6 mb-4">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Feature
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      Gemini
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      GPT
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "text output", gemini: true, gpt: true },
                      { name: "image understanding", gemini: true, gpt: true },
                      { name: "video understanding", gemini: true, gpt: false },
                      { name: "audio understanding", gemini: true, gpt: false },
                      {
                        name: "document understanding",
                        gemini: false,
                        gpt: false,
                      },
                    ].map((feature) => (
                      <div
                        key={feature.name}
                        className="grid grid-cols-3 gap-4 md:gap-6 items-center py-2"
                      >
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          {feature.name}
                        </div>
                        <div className="flex justify-center">
                          <div
                            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                              feature.gemini
                                ? "border-green-500 bg-green-500"
                                : "border-red-500 bg-red-500"
                            }`}
                          >
                            {feature.gemini ? (
                              <Check className="w-3 h-3 text-white" />
                            ) : (
                              <X className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div
                            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                              feature.gpt
                                ? "border-green-500 bg-green-500"
                                : "border-red-500 bg-red-500"
                            }`}
                          >
                            {feature.gpt ? (
                              <Check className="w-3 h-3 text-white" />
                            ) : (
                              <X className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Installation */}
          <section id="installation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Installation</h2>
            <CodeBlock
              language="terminal"
              filename="CLI"
              showLine={false}
              code={`npm i use-every-llm`}
            />
          </section>

          {/* Environment Configuration */}
          <section id="#environment-config" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Environment Configuration
            </h2>
            <CodeBlock
              language="js"
              filename=".env"
              code={`GEMINI_API_KEY=your-gemini-api-key
OPENAI_API_KEY=your-openai-api-key`}
            />
          </section>

          {/* Environment Configuration */}
          <section id="#initialize-llms" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Initialize LLMs</h2>
            <div className="space-y-8">
              <div>
                <CodeBlock
                  language="js"
                  filename="index.js"
                  code={`import { useLLM, initLLM } from "./index.js";

initLLM({
  openaiApiKey: process.env.OPENAI_API_KEY,
  googleApiKey: process.env.GEMINI_API_KEY,
});}`}
                />
              </div>
            </div>
          </section>

          {/* Models Supported */}
          {/* <section id="models" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Models Supported</h2>
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Gemini
                    </h3>
                    <div className="space-y-3">
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300">
                        gemini-1.5-flash
                      </div>
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300">
                        gemini-2.5-flash
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      GPT
                    </h3>
                    <div className="space-y-3">
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300">
                        gpt-4-turbo
                      </div>
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300">
                        gpt-4o
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section> */}

          {/* Sample Code */}
          <section id="sample-code" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Sample Code for every kind of call
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Basic Text Generation
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="model-toggle">GPT</Label>
                  <Switch
                    id="model-toggle"
                    checked={showGemini}
                    onCheckedChange={setShowGemini}
                  />
                  <Label htmlFor="model-toggle">Gemini</Label>
                </div>
                {showGemini ? (
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What model is it?"
});

console.log(response.text);`}
                  />
                ) : (
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`

const response = await useLLM({
  model: "gpt-4o",
  prompt: "What model is it?"
});

console.log(response.choices[0].message.content);`}
                  />
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Streaming Response
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="streaming-toggle">GPT</Label>
                  <Switch
                    id="streaming-toggle"
                    checked={showGeminiStreaming}
                    onCheckedChange={setShowGeminiStreaming}
                  />
                  <Label htmlFor="streaming-toggle">Gemini</Label>
                </div>
                {showGeminiStreaming ? (
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What model is it?",
  streamingResponse: true
});

for await (const chunk of response )  {
  console.log(chunk.text);
}`}
                  />
                ) : (
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gpt-4o",
  prompt: "What model is it?",
  streamingResponse: true
});

for await (const chunk of response) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`}
                  />
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Plug System Prompt
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="provider-toggle">GPT</Label>
                  <Switch
                    id="provider-toggle"
                    checked={showGeminiProvider}
                    onCheckedChange={setShowGeminiProvider}
                  />
                  <Label htmlFor="provider-toggle">Gemini</Label>
                </div>
                {showGeminiProvider ? (
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What model is it?",
  systemPrompt: "Respond like human"
});

console.log(response.text);`}
                  />
                ) : (
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gpt-4o",
  prompt: "What model is it?",
  systemPrompt: "Respond like human"
});

console.log(response.choices[0].message.content);`}
                  />
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Image Understanding
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="vision-toggle">GPT</Label>
                  <Switch
                    id="vision-toggle"
                    checked={showGeminiVision}
                    onCheckedChange={setShowGeminiVision}
                  />
                  <Label htmlFor="vision-toggle">Gemini</Label>
                </div>
                {showGeminiVision ? (
                  <>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      Image File
                    </h4>
                    <CodeBlock
                      language="js"
                      filename="index.js"
                      code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What image is it?",
  image: "image.png"
});

console.log(response.text);`}
                    />
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      Image File
                    </h4>
                    <CodeBlock
                      language="js"
                      filename="index.js"
                      code={`const response = await useLLM({
  model: "gpt-4o",
  prompt: "What image is it?",
  image: "image.png"
});

console.log(response.choices[0].message.content);`}
                    />
                  </>
                )}

                {showGeminiVision ? (
                  <>
                    <h4 className="text-lg font-semibold mb-4 mt-4 text-gray-900 dark:text-white">
                      Image URL
                    </h4>
                    <CodeBlock
                      language="js"
                      filename="index.js"
                      code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What image is it?",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB--AnvTJ7uUPBy8TTkULTUCLNSqiFWr6L3g&s"
});

console.log(response.text);`}
                    />
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-semibold mt-4 mb-4 text-gray-900 dark:text-white">
                      Image URL
                    </h4>
                    <CodeBlock
                      language="js"
                      filename="index.js"
                      code={`const response = await useLLM({
  model: "gpt-4o",
  prompt: "What image is it?",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB--AnvTJ7uUPBy8TTkULTUCLNSqiFWr6L3g&s"
});

console.log(response.choices[0].message.content);`}
                    />
                  </>
                )}

                {showGeminiVision ? (
                  <>
                    <h4 className="text-lg font-semibold mb-4 mt-4 text-gray-900 dark:text-white">
                      Base-64 Encodings
                    </h4>
                    <CodeBlock
                      language="js"
                      filename="index.js"
                      code={`import * as fs from "node:fs";

const base64Image = fs.readFileSync("image.png", {
  encoding: "base64",
});

const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What image is it?",
  image: base64Image
});

console.log(response.text);`}
                    />
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-semibold mt-4 mb-4 text-gray-900 dark:text-white">
                      Base-64 Encodings
                    </h4>
                    <CodeBlock
                      language="js"
                      filename="index.js"
                      code={`import * as fs from "node:fs";

const base64Image = fs.readFileSync("image.png", {
  encoding: "base64",
});

const response = await useLLM({
  model: "gpt-4o",
  prompt: "What image is it?",
  image: base64Image
});

console.log(response.choices[0].message.content);`}
                    />
                  </>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Video Understanding
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="streaming-toggle">Gemini</Label>
                </div>
                <CodeBlock
                  language="js"
                  filename="index.js"
                  code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What video is it?",
  video: "video.mp4"
});

console.log(response.text);`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Audio Understanding
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="streaming-toggle">Gemini</Label>
                </div>
                <CodeBlock
                  language="js"
                  filename="index.js"
                  code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What audio is it?",
  audio: "audio.mp4",
});

console.log(response.text);`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Doucment Understanding
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Label htmlFor="vision-toggle">Gemini</Label>
                </div>
                <>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Document File
                  </h4>
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What document is it?",
  document: "document.pdf",
});

console.log(response.text);`}
                  />
                </>

                <>
                  <h4 className="text-lg font-semibold mb-4 mt-4 text-gray-900 dark:text-white">
                    Document URL
                  </h4>
                  <CodeBlock
                    language="js"
                    filename="index.js"
                    code={`const response = await useLLM({
  model: "gemini-2.0-flash",
  prompt: "What document is it?",
 document: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
});

console.log(response.text);`}
                  />
                </>
              </div>
            </div>
          </section>

          {/* What's Next */}
          <section id="whats-next" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  1.
                </span>
                <span className="text-gray-900 dark:text-white">
                  Claude, Groq, Ollama, and more
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  2.
                </span>
                <span className="text-gray-900 dark:text-white">
                  Image, Video, Audio generation
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  3.
                </span>
                <span className="text-gray-900 dark:text-white">
                  MCP and Tool Calling
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  4.
                </span>
                <span className="text-gray-900 dark:text-white">
                  Agent Development Kit
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
