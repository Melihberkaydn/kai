import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import Modal from "../components/Modal";
import {
  act_bias_scripts,
  act_unbias_scripts,
  mus_bias_scripts,
  mus_unbias_scripts,
  getRandomInt,
} from "../lib/generator";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [isNegative, setIsNegative] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [vibe, setVibe] = useState<VibeType>("GPT-2");
  const [generatedBios, setGeneratedBios] = useState("");

  const bioRef = useRef<null | HTMLDivElement>(null);

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  function bias_select() {
    var bias = getRandomInt(0, 2);
    if (
      prompt ==
      "Create a short movie teaser including a description of the main character for a Musical movie."
    ) {
      if (bias == 0) {
        setIsNegative(false);
        var script = mus_bias_scripts[getRandomInt(0, 3)];
        return script;
      } else {
        setIsNegative(true);
        var script = mus_unbias_scripts[getRandomInt(0, 3)];
        return script;
      }
    } else if (
      prompt ==
      "Create a short movie teaser including a description of the main character for a Action movie."
    ) {
      if (bias == 0) {
        setIsNegative(false);
        var script = act_bias_scripts[getRandomInt(0, 3)];
        return script;
      } else {
        setIsNegative(true);
        var script = act_unbias_scripts[getRandomInt(0, 3)];
        return script;
      }
    } else {
      return "Try Again...";
    }
  }

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* const prompt = `Generate 2 ${vibe} twitter biographies with no hashtags and clearly labeled "1." and "2.". ${
    vibe === "Funny"
      ? "Make sure there is a joke in there and it's a little ridiculous."
      : null
  }
      Make sure each generated biography is less than 160 characters, has short sentences that are found in Twitter bios, and base them on this context: ${bio}${
    bio.slice(-1) === "." ? "" : "."
  }`;
  

  async function fetcher() {
    const response = await fetch(
      "https://baconipsum.com/api/?type=meat-and-filler"
    );
    const data = await response.json();
    console.log(data);
  }

   const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }
    scrollToBios();
    setLoading(false); 
  };


  const generateBio = async (e: any) => {
    setGeneratedBios("");
    setLoading(true);

    const response = await fetch(
      "https://baconipsum.com/api/?type=meat-and-filler&paras=1"
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;

    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }
    scrollToBios();
    setLoading(false);
  };
  */
  const generateBio = async (e: any) => {
    setGeneratedBios("");
    setLoading(true);
    var bias = bias_select();
    setGeneratedBios(bias);
    scrollToBios();
    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>KAi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
          href="https://github.com/tum-ai-daiki-kai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Check Our Repo</p>
        </a>
        <h1 className="sm:text-6xl text-4xl max-w-[740px] font-bold text-slate-900">
          Biased much? We help you find out bias in your scripts.
        </h1>
        <p className="text-slate-500 mt-5">Redeem your results from biases. </p>
        <div className="max-w-xl w-full">
          <div className="flex mt-12 mb-5 items-center space-x-3">
            <Image src="/1-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Select a modal.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>
          <div className="flex mt-12 items-center space-x-3">
            <Image
              src="/2-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Enter prompt{" "}
              <span className="text-slate-500">
                (Write a short prompt that describes the context.)
              </span>
              .
            </p>
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={"Please enter a prompt that describes the context."}
          />

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateBio(e)}
            >
              Generate results &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedBios && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Your generated response.
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                <div
                  className={`bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border ${
                    isNegative
                      ? "border-red-500 bg-red-200"
                      : "border-green-300 bg-green-100"
                  }`}
                  onClick={() => {
                    navigator.clipboard.writeText(generatedBios);
                    toast("Copied to clipboard", {
                      icon: "✂️",
                    });
                  }}
                  key={generatedBios}
                >
                  <p>{generatedBios}</p>
                </div>
              </div>
              <div>
                {isNegative && (
                  <button
                    className="bg-red-400 rounded-xl text-white font-medium px-4 py-2 sm:mt-2 mt-2 hover:bg-black/80"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Your Results might be biased. Click here to see more
                    details. &rarr;
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      {isModalOpen && <Modal onClose={handleOnClose} />}
      <Footer />
    </div>
  );
};

export default Home;
