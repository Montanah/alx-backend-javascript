import RowID from "interface";
import RowElement from "interface";

export default interface CRUD {
    create(data: RowElement): RowID;
    read(rowID: RowID): RowElement;
    update(rowID: RowID, data: RowElement): RowID;
    delete(rowID: RowID): void;
}