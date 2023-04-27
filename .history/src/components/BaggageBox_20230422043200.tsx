import BaggageList from "./BaggageList";

export default function BaggageBox() {
  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        <div className="flex flex-col items-center">
          <BaggageList />
          <input
            className="outline-none border p-2 rounded-lg border-stone-300 mr-2 w-5/6"
            type="text"
          />
          <button className="bg-green p-2 rounded-lg text-white w-1/6">
            등록
          </button>
        </div>
      </div>
    </section>
  );
}
