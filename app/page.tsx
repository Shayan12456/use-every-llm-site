"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Copy,
  Star,
  Github,
  ExternalLink,
  Zap,
  Shield,
  Code,
  ArrowRight,
  Sparkles,
  X,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CodeBlock } from "@/components/ui/code-block";
import { Switch } from "@/components/ui/switch";
import { useForm } from '@formspree/react';
import { Label } from "@/components/ui/label";
import "@/styles/styles.css";

function FloatingShapes() {

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -1, -1]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#333333" wireframe />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[2, 3, -3]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[-3, -2, -2]}>
          <tetrahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#999999" />
        </mesh>
      </Float>
    </>
  );
}

export default function HomePage() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [state, handleSubmit] = useForm("xzzjqjle");
  const [showGeminiText, setShowGeminiText] = useState(true);
  const [showGeminiStreaming, setShowGeminiStreaming] = useState(true);
  const [showGeminiVision, setShowGeminiVision] = useState(true);
  const [showGeminiVideo, setShowGeminiVideo] = useState(true);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-30">
        <ThemeToggle page="home" />
      </div>
              <div className="bg-black text-white flex justify-around pt-4">I would like to know more about upcoming features of use-every-llm, just send me helpful updates and announcements.
<form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="flex-grow px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                    <Button type="submit" disabled={state.succeeded} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                      {state.succeeded ? "Registered!" : "Register"}
                    </Button>
                  </form>
</div>
      {/* Hero Section with 3D Elements */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-background min-h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <FloatingShapes />
              <Environment preset="studio" />
            </Suspense>
          </Canvas>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-6xl text-white mb-6 drop-shadow-2xl">
              Using LLM APIs have never been easier.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
              Ship AI Apps with a single function that speaks Gemini and GPT
              today — Claude, Groq, Ollama, and more next. No lock-in, just
              ship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="https://github.com/Shayan12456/use-every-llm">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white cursor-pointer text-white hover:bg-white hover:text-[gray] px-8 py-3 text-lg bg-transparent"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              {/* Works with Node 18+, ESM-only, MIT. */}
            </p>
          </div>
        </div>
      </section>

      {/* Key USPs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-primary mb-4">
              We not only save developers time, but increase development speed
              also
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Indie hackers shipping fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Perfect for indie hackers shipping fast
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Avoiding lock-in</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Who don't want to commit clients to one LLM provider.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Product teams needing reliability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Product teams needing reliability + easy fallbacks between
                  providers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-primary mb-4">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Install</h3>
              <code className="bg-muted px-3 py-1 rounded text-sm font-mono">
                npm i use-every-llm
              </code>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Configure</h3>
              <p className="text-muted-foreground">
                Configure your provider key(s)
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Import &amp; Call</h3>
              <p className="text-muted-foreground whitespace">
                {`useLLM({model:"any model",prompt:"..."})`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl text-primary text-center mb-12">
              Feature Matrix
            </h2>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { name: "Text generation", gemini: true, gpt: true },
                    { name: "Image Understanding", gemini: true, gpt: true },
                    {
                      name: "Audio Understanding",
                      gemini: true,
                      gpt: false,
                    },
                  ].map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center justify-between py-3 border-b"
                    >
                      <span className="font-medium">{feature.name}</span>
                      <div className="flex gap-4">
                        <Badge
                          variant="secondary"
                          className={`${
                            feature.gemini === true
                              ? "bg-green-100 text-green-800"
                              : feature.gemini === false
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {feature.gemini === true ? (
                            <Check className="w-3 h-3 mr-1" />
                          ) : feature.gemini === false ? (
                            <X className="w-3 h-3 mr-1" />
                          ) : null}
                          {feature.gemini === true
                            ? "Gemini"
                            : feature.gemini === false
                            ? "Gemini"
                            : `Gemini (${feature.gemini})`}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`${
                            feature.gpt === true
                              ? "bg-green-100 text-green-800"
                              : feature.gpt === false
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {feature.gpt === true ? (
                            <Check className="w-3 h-3 mr-1" />
                          ) : feature.gpt === false ? (
                            <X className="w-3 h-3 mr-1" />
                          ) : null}
                          {feature.gpt === true
                            ? "GPT"
                            : feature.gpt === false
                            ? "GPT"
                            : `GPT (${feature.gpt})`}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <a href="/docs#features">
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      See full matrix
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples - Enhanced Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Code Examples
              </div>
              <h2 className="font-bold text-4xl md:text-5xl text-primary mb-4">
                See it in action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From simple text generation to complex multimodal AI
                interactions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <Card className="t group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Text Generation With Text Prompt
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          Basic text generation
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Text Prompt
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-2 mb-4">
                      <Label htmlFor="text-toggle">GPT</Label>
                      <Switch
                        id="text-toggle"
                        checked={showGeminiText}
                        onCheckedChange={setShowGeminiText}
                      />
                      <Label htmlFor="text-toggle">Gemini</Label>
                    </div>
                    {showGeminiText ? (
                      <CodeBlock
                        language="js"
                        filename="text-generation.js"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gemini-2.0-flash\",\n  prompt: \"What model is it\",\n});\n\nconsole.log(result.text);`}
                      />
                    ) : (
                      <CodeBlock
                        language="js"
                        filename="text-generation.js"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gpt-4o\",\n  prompt: \"What model is it\",\n});\n\nconsole.log(result.text);`}
                      />
                    )}
                  </CardContent>
                </Card>
                <br />
                <Card className="t group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Streaming
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          Real-time response streaming
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Streaming Text
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
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
                        filename="streaming-response.js"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gemini-2.0-flash\",\n  prompt: \"What model is it\",\n  streamingResponse: true,\n});\n\nfor await (const chunk of result )  {\n  console.log(chunk.text);\n}`}
                      />
                    ) : (
                      <CodeBlock
                        language="js"
                        filename="streaming-response.js"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gpt-4o\",\n  prompt: \"What model is it\",\n  streamingResponse: true,\n});\n\nfor await (const chunk of result )  {\n  console.log(chunk.text);\n}`}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="t group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Image + text
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          Vision capabilities
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Multimodal
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
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
                      <CodeBlock
                        language="js"
                        filename="text-with-image-generation.js"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gemini-1.5-flash\",\n  prompt: \"what image is it?\",\n  image: \"image.png\",\n});\n\nconsole.log(result.text);`}
                      />
                    ) : (
                      <CodeBlock
                        language="js"
                        filename="text-with-image-generation.js"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gpt-4.1-mini\",\n  prompt: \"what image is it?\",\n  image: \"image.png\",\n});\n\nconsole.log(result.choices[0].message.content);`}
                      />
                    )}
                  </CardContent>
                </Card>
                <br />
                <Card className="t group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          Video + Text
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          Vision capabilities
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Reliability
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-2 mb-4">
                      <Label htmlFor="video-toggle">GPT</Label>
                      <Switch
                        id="video-toggle"
                        checked={showGeminiVideo}
                        onCheckedChange={setShowGeminiVideo}
                      />
                      <Label htmlFor="video-toggle">Gemini</Label>
                    </div>
                    {showGeminiVideo ? (
                      <CodeBlock
                        language="jsx"
                        filename="hello-world.jsx"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gemini-2.0-flash\",\n  prompt: \"what video is it?\",\n  systemPrompt: \"You are a video describer\",\n  video: \"My Movie.mp4\",\n});\n\nconsole.log(result.text);`}
                      />
                    ) : (
                      <CodeBlock
                        language="jsx"
                        filename="hello-world.jsx"
                        code={`import useLLM from 'use-every-llm'\n\nconst result = await useLLM({\n  model: \"gpt-4o\",\n  prompt: \"what video is it?\",\n  systemPrompt: \"You are a video describer\",\n  video: \"My Movie.mp4\",\n});\n\nconsole.log(result.text);`}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold group"
                >
                  View Full Documentation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-primary mb-12">
              Trust & Safety
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Privacy</h3>
                <p className="text-muted-foreground">
                  No analytics by default. No key collection. All requests go
                  straight to the provider you choose.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">License</h3>
                <p className="text-muted-foreground">
                  MIT licensed for maximum flexibility and peace of mind.
                </p>
              </div>

              {/* <div>
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-muted-foreground">
                  Env-based keys, recommended server-only usage for maximum
                  security.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl text-primary text-center mb-12">
              Future Roadmap
            </h2>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    "Groq (LLaMA/Mixtral)",
                    "Claude (Anthropic)",
                    "Ollama (local)",
                    "Image/Video/Audio generation helpers",
                    "MCP Support + Tool Calling",
                    "Agent Development Kit",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-primary rounded"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-8">
              Start free today
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`https://www.npmjs.com/package/use-every-llm`}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-3 text-lg font-semibold cursor-pointer"
                  onClick={() =>
                    copyToClipboard("npm i use-every-llm", "cta-install")
                  }
                >
                  <Code className="mr-2 h-5 w-5" />
                  npm i use-every-llm
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg bg-transparent cursor-pointer"
                >
                  Getting Started
                </Button>
              </Link>
              <Link href="https://github.com/Shayan12456/use-every-llm">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg bg-transparent cursor-pointer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Star & Issues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
