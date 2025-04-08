// import "./List.css";
import BtnConfirm from "../BtnConfirm/BtnConfirm";
import BtnRemove from "../BtnRemove/BtnRemove";
import BtnEdit from "../BtnEdit/BtnEdit";

export default function List({
  shoppingList,
  onClickRemove,
  selectedItemId,
  toggleItemSelection,
  onEditItem,
  editingItem,
}) {
  return (
    <>
      <ul>
        {shoppingList.map((item) => (
          <div
            key={item.id}
            className={`list-item ${
              selectedItemId.includes(item.id) ? "selezionato" : ""
            } ${editingItem === item.id ? "editing" : ""}`}
          >
            <li>
              {editingItem === item.id ? (
                <span className="editing-text">{item.list}</span>
              ) : (
                item.list
              )}
              
              <div className="button-group">
                <BtnConfirm
                  item={item.id}
                  toggleItemSelection={toggleItemSelection}
                  selected={selectedItemId.includes(item.id)}
                />
                <BtnEdit 
                  onClick={() => onEditItem(item.id, item.list)} 
                  isEditing={editingItem === item.id}
                />
                <BtnRemove onClickRemove={onClickRemove} item={item.id} />
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}