import BaggageItem from "./BaggageItem";
import Input from "./Input";
import { ListItem } from "../pages/Plan";

interface Boxprops {
  list: ListItem[];
  onAdd: (newItem: ListItem) => void;
  onDelete: (id: string) => void;
}

export default function BaggageBox({ list, onAdd, onDelete }: Boxprops) {
  return (
    <ul className="flex flex-col ">
      <div className="sticky top-0 ">
        <div className=" bg-ligntgreen rounded-lg p-2 text-md font-bold text-center  ">
          준비물
        </div>
        <div className=" border p-3 mt-3 border-stone-300 rounded-lg ">
          <Input color="green" component="Baggage" />
          {list && list.length == 0 ? (
            <div className="text-4xl font-bold text-stone-300 text-center p-5">
              <h1 className="p-2">준비물을</h1>
              <h1 className="p-2">추가해보세요!</h1>
            </div>
          ) : (
            list &&
            list.map((item) => (
              <BaggageItem {...item} onDelete={onDelete} key={item.id} />
            ))
          )}
        </div>
      </div>
    </ul>
  );
}
