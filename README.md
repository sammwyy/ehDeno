# ehDeno
A small and easy to use Event Handler for Deno

## How to use:
```typescript
// Import the library
import { EventHandler } from 'https://raw.githubusercontent.com/sammwyy/ehDeno/master/ehdeno.ts';

// Instantiate EventHandler
const events = new EventHandler();
```

## Functions:
### on
**Description:** Use this function to register an event and add a callback function that will be executed when calling that event.  
**Returns:** Void  
**Example**  
```typescript
events.on("saysHelloWorld", () => {
    console.log("Hello World");
})
```


### emit
**Description:** Use this function to execute all callbacks of an event.  
**Returns:** Void  
**Example**  
```typescript
events.emit("saysHelloWorld");
```


### clear
**Description:** Use this function to clear the callbacks list of an event.  
**Returns:** Void  
**Example**  
```typescript
events.clear("saysHelloWorld");
```


### clearAll
**Description:** Use this function to clear the callbacks list of all events.  
**Returns:** Void  
**Example**  
```typescript
events.clearAll();
```


### get
**Description:** This function returns a list with the callbacks of an event.  
**Example**  
**Returns:** List  
```typescript
events.get("saysHelloWorld");
```


### list
**Description:** This function returns a list of all handled events.  
**Returns:** List  
**Example**  
```typescript
events.clearAll();
```


### count
**Description:** This function returns the count of handled events.  
**Returns:** Number  
**Example**  
```typescript
events.clearAll();
```


#x## hasHandled
**Description:** This function returns `true` if the event is handled, otherwise returns `false`.  
**Returns:** List  
**Example:**  
```typescript
events.hasHandled("saysHelloWorld");
```


###### Coded with ❤️
