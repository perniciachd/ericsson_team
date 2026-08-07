import { useAppDispatch, useAppSelector } from "./store";
import { addItem, removeItem } from "./store";
function UserComp() {
  // store key is `user`, not `cart` — state.user.items is fully typed as Item[]
  const items = useAppSelector((state) => state.user.items);
  const dispatch = useAppDispatch();
  return (
<>
      {items.map((item:any) => (
<p key={item.id}>
          {item.name}
<button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
</p>
      ))}
<button
        onClick={() =>
          dispatch(
            addItem({
              id: Date.now(),
              name: "Laptop",
            })
          )
        }
>
        Add
</button>
</>
  );
}
export default UserComp;