import InventoryItem from "./InventoryItem";

class Inventory {
    ownedItems: InventoryItem[] = []

    addItem(itemToAdd: InventoryItem) {
        const index = this.ownedItems.findIndex(ownedItem => ownedItem.item.name === itemToAdd.item.name)
        if (index > 0) this.ownedItems[index].quantity++
        else this.ownedItems.push(itemToAdd)
    }

    useItem(itemToUse: InventoryItem) {
        const index = this.ownedItems.findIndex(ownedItem => ownedItem.item.name === itemToUse.item.name)
        this.ownedItems[index].quantity--
        if (this.ownedItems[index].quantity === 0) this.ownedItems = this.ownedItems.filter((_, i) => i !== index)
    }
}

export default Inventory