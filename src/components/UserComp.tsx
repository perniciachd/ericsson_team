import { useAppDispatch, useAppSelector } from "./Store";
import { addItem, removeItem } from "./UserSlice";

function UserComp() {
  const items = useAppSelector((state) => state.user.items);
  const dispatch = useAppDispatch();

  return (
    <>
      {items.map((item) => (
        <p key={item.id}>
          {item.name}

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
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