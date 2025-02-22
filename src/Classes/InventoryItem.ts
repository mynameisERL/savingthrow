import Item from "./Item";

class InventoryItem {
    item: Item
    quantity: number = 1

    constructor(item: Item) {
        this.item = item
    }
}

export default InventoryItem