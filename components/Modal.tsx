import React from "react";

export default function Modal({
  onClose = () => {},
  isAction,
}: {
  isAction: boolean;
  onClose: () => void;
}) {
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
            {isAction ? (
              <div>
                <p className="mb-4">
                  For the Action Genre male characters dominates.{" "}
                  <b>Think about having a female lead!</b>{" "}
                </p>
                <p>Ratio: 0.725536</p>
                <p>Sentiment Score male: 0.120000</p>
                <p>Sentiment score female: 0.056789</p>{" "}
              </div>
            ) : (
              <div>
                <p className="mb-4">
                  For the Musical Genre female characters dominates.{" "}
                  <b>Think about having a female lead!</b>{" "}
                </p>
                <p>Ratio: 0.325536</p>
                <p>Sentiment Score male: 0.020000</p>
                <p>Sentiment score female: 0.156789</p>{" "}
              </div>
            )}
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
