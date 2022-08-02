# Feature A

## Business Requirements

- Button to check all daily chores list items
- Use same button to uncheck all daily chores list items
- remove current functionality of routing the user
- conditionally render button to say:
    - condition 1 if all checked "reset list"
    - condition 2 if not all checked "check all"
- Button should be on List items view

## Technical Requirements

### Requirement 1 and 2

```html
<input type="checkbox"> 
// add event listener to handle api request
```

### Requirement 3

- remove link

### Requirement 4

- write a function to handle toggling all checkboxes onClick and sending api req at end of function
- api/daily-chores-lists/1/list-items/toggle-all-is-complete
- ```sql
  UPDATE daily_chore_list SET is_complete = ? WHERE id = ?;
```
- ```js
// figure out query to get list items by daily chore list id
  let listItemsToUpdate = query database for items to update
  for item of listItemsToUpdate
    query database to update item by id
```