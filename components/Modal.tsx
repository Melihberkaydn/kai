import React from "react";

export default function Modal({ onClose = () => {} }) {
  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-md w-[380px] h-96  flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-center text-xl text-gray-700 mb-8">
            Details
          </h1>

          <div className="flex flex-col overflow-scroll max-h-52 mb-4">
            Flank kielbasa pancetta, ball tip ullamco incididunt turducken.
            Culpa shoulder t-bone duis shank in mollit landjaeger burgdoggen
            tempor lorem ipsum consectetur laboris. In beef ribs sausage nulla.
            Irure alcatra chuck in, duis strip steak esse chicken. Short ribs
            salami ham sint proident buffalo chuck occaecat magna cupidatat
            alcatra tongue.Flank kielbasa pancetta, ball tip ullamco incididunt
            turducken. Culpa shoulder t-bone duis shank in mollit landjaeger
            burgdoggen tempor lorem ipsum consectetur laboris. In beef ribs
            sausage nulla. Irure alcatra chuck in, duis strip steak esse
            chicken. Short ribs salami ham sint proident buffalo chuck occaecat
            magna cupidatat alcatra tongue."
          </div>
        </div>
        <div className="flex text-center items-center justify-center">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-700 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
