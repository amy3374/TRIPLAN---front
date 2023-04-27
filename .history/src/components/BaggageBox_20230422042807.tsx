export default function BaggageBox() {
  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        <div className="flex justify-center flex-wrap">
          <input
            className="outline-none border p-2 rounded-lg border-stone-300 mr-2"
            type="text"
          />
          <button className="bg-green p-2 rounded-lg text-white">등록</button>
        </div>
      </div>
    </section>
  );
}
