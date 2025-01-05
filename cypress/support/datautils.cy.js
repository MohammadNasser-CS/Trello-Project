import { APIKey, APIToken } from "./constants.cy";

class DataUtils {

    createBoard = (boardName) => {
        return cy.request("POST", `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard = (boardId) => {
        return cy.request("DELETE", `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }
    getBoardLists = (boardId) => {
        return cy.request("GET", `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`)
    }
    createCard = (listId, cardName) => {
        return cy.request("POST", `https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}&name=${cardName}`);
    }
}
export default DataUtils;